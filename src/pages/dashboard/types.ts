// ─── Shared Types ─────────────────────────────────────────────────────────────

export interface Stats {
  totalCustomers: number;
  totalInquiries: number;
  recentInquiries: number;
  inquiryTypes: Record<string, number>;
}

export interface WaStatus {
  connected: boolean;
  verifiedName?: string;
  displayPhoneNumber?: string;
  wabaId?: string;
  qualityRating?: string;
}

export interface Conversation {
  phone: string;
  name: string;
  lastMessage?: { content: string };
  lastContact?: { _seconds: number };
  inquiry_type?: string;
}

export interface Message {
  role: "user" | "assistant" | "admin";
  content: string;
  timestamp?: { _seconds: number };
}

export interface Takeover {
  active: boolean;
  adminEmail?: string;
}

export interface Inquiry {
  customerPhone: string;
  customerName: string;
  inquiryType?: string;
  message: string;
  createdAt?: { _seconds: number };
}

export interface AdmissionDocument {
  storageUrl: string;
  mimeType: string;
  filename: string;
  receivedAt: string;
  publicId?: string;
  resourceType?: string;
}

export interface IntakeSession {
  phone: string;
  collectedData: Record<string, string>;
  documents: Record<string, AdmissionDocument>;
  currentStepIndex: number;
  complete: boolean;
  silenced: boolean;
  startedAt?: { _seconds: number };
  completedAt?: { _seconds: number };
  stoppedAt?: { _seconds: number };
  updatedAt?: { _seconds: number };
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

export interface GalleryImage {
  slug: string;
  label: string;
  url: string;
  r2Key: string;
  mimeType: string;
  uploadedAt: string;
}

// ─── Services ─────────────────────────────────────────────────────────────────

export interface ServiceVariant {
  label: string;   // empty string = single-price, no sub-option label shown
  price: number;   // KES
}

export interface Service {
  id:             string;   // slug, e.g. "knotless_braids" — Firestore doc ID
  name:           string;   // display name, e.g. "Knotless Braids"
  category:       string;   // e.g. "hair_services"
  variants:       ServiceVariant[];
  priceOnRequest: boolean;  // true = "price on consultation", no variants shown
  available:      boolean;  // false = hidden from AI context
  sortOrder:      number;
  updatedAt?:     string;
}

// ─── Appointments ─────────────────────────────────────────────────────────────

export type AppointmentStatus = "pending" | "confirmed" | "cancelled";

export interface Appointment {
  id: string;                          // Firestore doc ID — injected by the loader
  customerName: string;
  customerPhone: string;
  service: string;
  branch: string;
  requestedTime: string;               // raw string from customer, e.g. "Tomorrow 10am"
  status: AppointmentStatus;
  createdAt?: { _seconds: number };
  clientId?: string;
}

// ─── Branding ─────────────────────────────────────────────────────────────────

export interface BrandingConfig {
  phoneNumberId?: string;
  businessName?: string;
  clientId?: string;
  dashboard?: {
    title?: string;
    headerLabel?: string;
    colors?: Record<string, string>;
  };
  contactLabel?: string;
  categoryLabels?: Record<string, string>;
  intakeFlow?: {
    enabled: boolean;
    tabLabel: string;
    tabIcon: string;
    entityLabel: string;
    fieldLabels: Record<string, string>;
  } | null;
  appointmentsFlow?: {
    enabled: boolean;
    tabLabel: string;
    tabIcon: string;
    entityLabel: string;
    fieldLabels: Record<string, string>;
  } | null;
  galleryFlow?: {
    enabled: boolean;
    tabLabel: string;
    tabIcon: string;
  } | null;
  servicesFlow?: {
    enabled: boolean;
    tabLabel: string;
    tabIcon: string;
  } | null;
}

export type Section =
  | "overview"
  | "conversations"
  | "inquiries"
  | "intake"
  | "appointments"
  | "analytics"
  | "gallery"
  | "services";