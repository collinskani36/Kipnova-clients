// ─── useDashboard ─────────────────────────────────────────────────────────────
// Centralises all state, data-fetching and actions for the Dashboard.
// The render layer (sections, modals) imports only what it needs from here.

import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import { apiFetch, API_BASE } from "../../../config/api";
import {
  Appointment,
  AppointmentStatus,
  BrandingConfig,
  Conversation,
  GalleryImage,
  Inquiry,
  IntakeSession,
  Message,
  Section,
  Service,
  Stats,
  Takeover,
  WaStatus,
} from "../types";

export function useDashboard() {
  const navigate = useNavigate();

  // ── UI state ────────────────────────────────────────────────────────────────
  const [section, setSection] = useState<Section>("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [appReady, setAppReady] = useState(false);

  // ── Branding ────────────────────────────────────────────────────────────────
  const [headerLabel, setHeaderLabel] = useState("🤖 AI Assistant");
  const [contactLabel, setContactLabel] = useState("Customer");
  const [categoryLabels, setCategoryLabels] = useState<Record<string, string>>({});
  const [intakeFlow, setIntakeFlow] = useState<BrandingConfig["intakeFlow"]>(null);
  const [appointmentsFlow, setAppointmentsFlow] = useState<BrandingConfig["appointmentsFlow"]>(null);
  const [galleryFlow, setGalleryFlow] = useState<BrandingConfig["galleryFlow"]>(null);
  const [servicesFlow, setServicesFlow] = useState<BrandingConfig["servicesFlow"]>(null);

  // ── PWA ─────────────────────────────────────────────────────────────────────
  // We no longer swap the manifest — one shared origin = one PWA ("Nova").
  // showInstallBanner is set true once branding has loaded and the page is ready.
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  // ── Overview ────────────────────────────────────────────────────────────────
  const [stats, setStats] = useState<Stats | null>(null);
  const [waStatus, setWaStatus] = useState<WaStatus | null>(null);
  const [waCopied, setWaCopied] = useState(false);

  // ── Conversations ───────────────────────────────────────────────────────────
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [convsLoading, setConvsLoading] = useState(false);

  // ── Inquiries ───────────────────────────────────────────────────────────────
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [inquiriesLoading, setInquiriesLoading] = useState(false);

  // ── Intake / Admissions ─────────────────────────────────────────────────────
  const [admissions, setAdmissions] = useState<IntakeSession[]>([]);
  const [admissionsLoading, setAdmissionsLoading] = useState(false);
  const [admissionsCount, setAdmissionsCount] = useState<{ total: number; complete: number } | null>(null);
  const [applicantModal, setApplicantModal] = useState<IntakeSession | null>(null);

  // ── Appointments ────────────────────────────────────────────────────────────
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [appointmentsLoading, setAppointmentsLoading] = useState(false);
  const [appointmentModal, setAppointmentModal] = useState<Appointment | null>(null);
  const [appointmentStatusUpdating, setAppointmentStatusUpdating] = useState(false);

  // ── Gallery ─────────────────────────────────────────────────────────────────
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [galleryUploading, setGalleryUploading] = useState(false);

  // ── Services ─────────────────────────────────────────────────────────────────
  const [services, setServices] = useState<Service[]>([]);
  const [servicesLoading, setServicesLoading] = useState(false);
  const [servicesSaving, setServicesSaving] = useState(false);

  // ── Chat modal ──────────────────────────────────────────────────────────────
  const [chatOpen, setChatOpen] = useState(false);
  const [chatPhone, setChatPhone] = useState("");
  const [chatName, setChatName] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [takeover, setTakeover] = useState<Takeover>({ active: false });
  const [replyText, setReplyText] = useState("");
  const [sendingReply, setSendingReply] = useState(false);
  const [takeoverLoading, setTakeoverLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ── Customer inquiries modal ─────────────────────────────────────────────────
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryModalPhone, setInquiryModalPhone] = useState("");
  const [inquiryModalName, setInquiryModalName] = useState("");
  const [customerInquiries, setCustomerInquiries] = useState<Inquiry[]>([]);
  const [customerInquiriesLoading, setCustomerInquiriesLoading] = useState(false);

  // ── Init ────────────────────────────────────────────────────────────────────
  useEffect(() => {
    applyClientBranding().then(() => {
      loadStats();
      loadWaStatus();
      loadConversations();
      loadAdmissionsCount();
      setAppReady(true);
    });
    const interval = setInterval(loadStats, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (section === "conversations") loadConversations();
    if (section === "inquiries")     loadInquiries();
    if (section === "intake")        loadAdmissions();
    if (section === "appointments")  loadAppointments();
    if (section === "gallery")       loadGallery();
    if (section === "services")      loadServices();
  }, [section]);

  useEffect(() => {
    if (chatOpen) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  // ── Branding ────────────────────────────────────────────────────────────────
  async function applyClientBranding() {
    try {
      const res = await apiFetch(`${API_BASE}/api/dashboard-config`);
      if (!res.ok) {
        console.error("[Branding] dashboard-config request failed:", res.status);
        return;
      }
      const cfg: BrandingConfig = await res.json();
      console.log("[Branding] cfg received:", {
        clientId: cfg.clientId,
        businessName: cfg.businessName,
        phoneNumberId: cfg.phoneNumberId,
        hasDashboard: !!cfg.dashboard,
        hasColors: !!cfg.dashboard?.colors,
      });

      if (!cfg.phoneNumberId) {
        console.warn("[Branding] No phoneNumberId — redirecting to embedded-signup");
        navigate("/embedded-signup", { replace: true });
        return;
      }

      if (!cfg.dashboard) {
        console.warn("[Branding] No dashboard config in response");
        return;
      }

      if (cfg.categoryLabels)    setCategoryLabels(cfg.categoryLabels);
      if (cfg.intakeFlow)        setIntakeFlow(cfg.intakeFlow);
      if (cfg.appointmentsFlow)  setAppointmentsFlow(cfg.appointmentsFlow);
      if (cfg.galleryFlow)       setGalleryFlow(cfg.galleryFlow);
      if (cfg.servicesFlow)      setServicesFlow(cfg.servicesFlow);
      if (cfg.dashboard.title)       document.title = cfg.dashboard.title;
      if (cfg.dashboard.headerLabel) setHeaderLabel(cfg.dashboard.headerLabel);
      if (cfg.dashboard.colors) {
        const root = document.documentElement;
        Object.entries(cfg.dashboard.colors).forEach(([key, value]) => {
          root.style.setProperty("--" + key, value);
        });
      }
      if (cfg.contactLabel) setContactLabel(cfg.contactLabel);

      // ── PWA install banner ─────────────────────────────────────────────────
      setShowInstallBanner(true);
      console.log("[PWA] install banner unlocked");
    } catch (err) {
      console.error("[Branding] applyClientBranding threw:", err);
    }
  }

  // ── Data loaders ────────────────────────────────────────────────────────────
  async function loadStats() {
    try {
      const res = await apiFetch(`${API_BASE}/api/stats`);
      const data: Stats = await res.json();
      setStats(data);
    } catch { /* silently fail */ }
  }

  async function loadWaStatus() {
    try {
      const res = await apiFetch(`${API_BASE}/api/whatsapp-status`);
      if (!res.ok) throw new Error();
      const data: WaStatus = await res.json();
      setWaStatus(data);
    } catch {
      setWaStatus({ connected: false });
    }
  }

  async function loadConversations() {
    setConvsLoading(true);
    try {
      const res = await apiFetch(`${API_BASE}/api/conversations`);
      const data = await res.json();
      setConversations(data.conversations || []);
    } catch {
      setConversations([]);
    } finally {
      setConvsLoading(false);
    }
  }

  async function loadInquiries() {
    setInquiriesLoading(true);
    try {
      const res = await apiFetch(`${API_BASE}/api/inquiries`);
      const data = await res.json();
      setInquiries(data.inquiries || []);
    } catch {
      setInquiries([]);
    } finally {
      setInquiriesLoading(false);
    }
  }

  async function loadAdmissionsCount() {
    try {
      const res = await apiFetch(`${API_BASE}/api/admissions/count`);
      if (!res.ok) return;
      const data = await res.json();
      setAdmissionsCount(data);
    } catch { /* silently fail */ }
  }

  async function loadAdmissions() {
    setAdmissionsLoading(true);
    try {
      const res  = await apiFetch(`${API_BASE}/api/admissions`);
      const data = await res.json();
      setAdmissions(data.sessions || []);
    } catch {
      setAdmissions([]);
    } finally {
      setAdmissionsLoading(false);
    }
  }

  async function loadAppointments() {
    setAppointmentsLoading(true);
    try {
      const res  = await apiFetch(`${API_BASE}/api/appointments`);
      const data = await res.json();
      // Each doc should arrive with its Firestore ID injected as `id` by the backend.
      setAppointments(data.appointments || []);
    } catch {
      setAppointments([]);
    } finally {
      setAppointmentsLoading(false);
    }
  }

  // ── Gallery ─────────────────────────────────────────────────────────────────

  async function loadGallery() {
    setGalleryLoading(true);
    try {
      const res = await apiFetch(`${API_BASE}/api/gallery`);
      const data = await res.json();
      setGalleryImages(data.images || []);
    } catch {
      setGalleryImages([]);
    } finally {
      setGalleryLoading(false);
    }
  }

  async function uploadGalleryImage(file: File, slug: string, label: string) {
    setGalleryUploading(true);
    try {
      const form = new FormData();
      form.append("image", file);
      form.append("slug", slug);
      form.append("label", label);
      const res = await apiFetch(`${API_BASE}/api/gallery/upload`, {
        method: "POST",
        body: form,
        // No Content-Type header — browser sets it with the boundary automatically
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Upload failed" }));
        alert(err.error || "Upload failed — please try again.");
        return;
      }
      const data = await res.json();
      // Prepend so the new image appears first (gallery is sorted newest-first)
      setGalleryImages((prev) => [data.image, ...prev.filter((i) => i.slug !== data.image.slug)]);
    } catch {
      alert("Upload failed — please check your connection and try again.");
    } finally {
      setGalleryUploading(false);
    }
  }

  async function deleteGalleryImage(slug: string) {
    try {
      const res = await apiFetch(`${API_BASE}/api/gallery/${slug}`, { method: "DELETE" });
      if (!res.ok) { alert("Could not delete image — please try again."); return; }
      setGalleryImages((prev) => prev.filter((i) => i.slug !== slug));
    } catch {
      alert("Could not delete image — please try again.");
    }
  }

  // ── Services ─────────────────────────────────────────────────────────────────

  async function loadServices() {
    setServicesLoading(true);
    try {
      const res  = await apiFetch(`${API_BASE}/api/services`);
      const data = await res.json();
      setServices(data.services || []);
    } catch {
      setServices([]);
    } finally {
      setServicesLoading(false);
    }
  }

  async function upsertService(service: Service) {
    setServicesSaving(true);
    try {
      const res = await apiFetch(`${API_BASE}/api/services`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(service),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Save failed" }));
        alert(err.error || "Could not save service — please try again.");
        return;
      }
      const data = await res.json();
      // Replace in list if exists, otherwise prepend
      setServices((prev) => {
        const exists = prev.some((s) => s.id === data.service.id);
        if (exists) return prev.map((s) => s.id === data.service.id ? data.service : s);
        return [data.service, ...prev];
      });
    } catch {
      alert("Could not save service — please check your connection.");
    } finally {
      setServicesSaving(false);
    }
  }

  async function deleteService(serviceId: string) {
    try {
      const res = await apiFetch(`${API_BASE}/api/services/${serviceId}`, { method: "DELETE" });
      if (!res.ok) { alert("Could not delete service — please try again."); return; }
      setServices((prev) => prev.filter((s) => s.id !== serviceId));
    } catch {
      alert("Could not delete service — please try again.");
    }
  }

  async function toggleServiceAvailable(service: Service) {
    const updated = { ...service, available: !service.available };
    // Optimistic update
    setServices((prev) => prev.map((s) => s.id === service.id ? updated : s));
    try {
      const res = await apiFetch(`${API_BASE}/api/services`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (!res.ok) throw new Error();
    } catch {
      // Revert on failure
      setServices((prev) => prev.map((s) => s.id === service.id ? service : s));
      alert("Could not update service — please try again.");
    }
  }

  // ── Appointment status update ────────────────────────────────────────────────
  // Optimistic: update local state immediately so the badge flips without
  // waiting for a re-fetch, then persist to Firestore via the backend.
  async function updateAppointmentStatus(id: string, status: AppointmentStatus) {
    // Optimistic update
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
    if (appointmentModal?.id === id) {
      setAppointmentModal((prev) => prev ? { ...prev, status } : prev);
    }

    setAppointmentStatusUpdating(true);
    try {
      const res = await apiFetch(`${API_BASE}/api/appointments/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error();
    } catch {
      // Revert optimistic update on failure
      alert("Could not update appointment status — please try again.");
      loadAppointments();
    } finally {
      setAppointmentStatusUpdating(false);
    }
  }

  // ── Intake helpers ───────────────────────────────────────────────────────────
  function fieldLabel(key: string): string {
    if (intakeFlow?.fieldLabels?.[key]) return intakeFlow.fieldLabels[key];
    return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function getPrimaryLabel(session: IntakeSession): string {
    const nameKeys = ["full_name", "name", "full name", "customer_name"];
    for (const k of nameKeys) {
      if (session.collectedData[k]) return session.collectedData[k];
    }
    const first = Object.values(session.collectedData)[0];
    return first || session.phone;
  }

  // ── Appointments helpers ─────────────────────────────────────────────────────
  function appointmentFieldLabel(key: string): string {
    if (appointmentsFlow?.fieldLabels?.[key]) return appointmentsFlow.fieldLabels[key];
    // camelCase → Title Case fallback
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (s) => s.toUpperCase())
      .trim();
  }

  // ── Chat actions ────────────────────────────────────────────────────────────
  async function viewConversation(phone: string, name: string) {
    setChatPhone(phone);
    setChatName(name);
    setMessages([]);
    setReplyText("");
    setChatOpen(true);
    try {
      const res = await apiFetch(`${API_BASE}/api/conversation/${phone}`);
      const data = await res.json();
      setTakeover(data.takeover || { active: false });
      setMessages(data.messages || []);
    } catch {
      setMessages([]);
    }
  }

  async function takeOverConversation() {
    setTakeoverLoading(true);
    try {
      const res = await apiFetch(`${API_BASE}/api/conversation/${chatPhone}/takeover`, { method: "POST" });
      if (!res.ok) throw new Error();
      setTakeover({ active: true, adminEmail: getAuth().currentUser?.email || "You" });
    } catch {
      alert("Could not take over this conversation — please try again.");
    } finally {
      setTakeoverLoading(false);
    }
  }

  async function handBackToAI() {
    try {
      const res = await apiFetch(`${API_BASE}/api/conversation/${chatPhone}/release`, { method: "POST" });
      if (!res.ok) throw new Error();
      setTakeover({ active: false });
    } catch {
      alert("Could not hand this conversation back to the AI — please try again.");
    }
  }

  async function sendAdminReply() {
    if (!replyText.trim() || !chatPhone) return;
    setSendingReply(true);
    const msg = replyText.trim();
    try {
      const res = await apiFetch(`${API_BASE}/api/conversation/${chatPhone}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });
      if (!res.ok) throw new Error();
      setReplyText("");
      setMessages((prev) => [...prev, { role: "admin", content: msg }]);
      setTakeover({ active: true, adminEmail: getAuth().currentUser?.email || "You" });
    } catch {
      alert("Could not send that message — please try again.");
    } finally {
      setSendingReply(false);
    }
  }

  // ── Customer inquiries modal ─────────────────────────────────────────────────
  async function viewCustomerInquiries(phone: string, name: string) {
    setInquiryModalPhone(phone);
    setInquiryModalName(name);
    setInquiryModalOpen(true);
    setCustomerInquiriesLoading(true);
    try {
      const res = await apiFetch(`${API_BASE}/api/inquiries`);
      const data = await res.json();
      const filtered = (data.inquiries as Inquiry[])
        .filter((i) => i.customerPhone === phone)
        .sort((a, b) => (b.createdAt?._seconds || 0) - (a.createdAt?._seconds || 0));
      setCustomerInquiries(filtered);
    } catch {
      setCustomerInquiries([]);
    } finally {
      setCustomerInquiriesLoading(false);
    }
  }

  // ── WA copy ─────────────────────────────────────────────────────────────────
  function copyWabaId() {
    if (!waStatus?.wabaId) return;
    navigator.clipboard.writeText(waStatus.wabaId).then(() => {
      setWaCopied(true);
      setTimeout(() => setWaCopied(false), 1500);
    });
  }

  // ── Inquiries grouping ───────────────────────────────────────────────────────
  const groupedInquiries = useCallback(() => {
    const map: Record<string, { name: string; phone: string; inquiries: Inquiry[] }> = {};
    inquiries.forEach((inq) => {
      if (!map[inq.customerPhone]) {
        map[inq.customerPhone] = { name: inq.customerName, phone: inq.customerPhone, inquiries: [] };
      }
      map[inq.customerPhone].inquiries.push(inq);
    });
    return Object.values(map)
      .map((g) => {
        g.inquiries.sort((a, b) => (b.createdAt?._seconds || 0) - (a.createdAt?._seconds || 0));
        return g;
      })
      .sort((a, b) => (b.inquiries[0].createdAt?._seconds || 0) - (a.inquiries[0].createdAt?._seconds || 0));
  }, [inquiries]);

  // ── Logout ───────────────────────────────────────────────────────────────────
  async function handleLogout() {
    await signOut(getAuth());
    navigate("/login", { replace: true });
  }

  return {
    // UI
    section, setSection,
    sidebarCollapsed, setSidebarCollapsed,
    mobileOpen, setMobileOpen,
    appReady,
    // Branding
    headerLabel, contactLabel, categoryLabels, intakeFlow, appointmentsFlow, galleryFlow, servicesFlow,
    // PWA
    showInstallBanner,
    // Overview
    stats, waStatus, waCopied, copyWabaId,
    // Conversations
    conversations, convsLoading,
    // Inquiries
    inquiries, inquiriesLoading, groupedInquiries,
    // Admissions
    admissions, admissionsLoading, admissionsCount,
    applicantModal, setApplicantModal,
    // Appointments
    appointments, appointmentsLoading,
    appointmentModal, setAppointmentModal,
    appointmentStatusUpdating,
    updateAppointmentStatus,
    appointmentFieldLabel,
    // Gallery
    galleryImages, galleryLoading, galleryUploading,
    uploadGalleryImage, deleteGalleryImage,
    // Services
    services, servicesLoading, servicesSaving,
    upsertService, deleteService, toggleServiceAvailable,
    // Chat modal
    chatOpen, setChatOpen,
    chatPhone, chatName,
    messages, takeover,
    replyText, setReplyText,
    sendingReply, takeoverLoading,
    messagesEndRef,
    // Customer inquiries modal
    inquiryModalOpen, setInquiryModalOpen,
    inquiryModalPhone, inquiryModalName,
    customerInquiries, customerInquiriesLoading,
    // Actions
    viewConversation,
    takeOverConversation,
    handBackToAI,
    sendAdminReply,
    viewCustomerInquiries,
    handleLogout,
    fieldLabel,
    getPrimaryLabel,
  };
}