// ─── Dashboard (orchestrator) ─────────────────────────────────────────────────
// This file owns nothing except wiring. All state lives in useDashboard,
// all rendering lives in the section/modal components below.

import InstallBanner from "../components/InstallBanner";
import "../styles/Dashboard.css";

import { useDashboard } from "./dashboard/hooks/useDashboard";

import Sidebar               from "./dashboard/Sidebar";
import OverviewSection       from "./dashboard/sections/OverviewSection";
import ConversationsSection  from "./dashboard/sections/ConversationsSection";
import InquiriesSection      from "./dashboard/sections/InquiriesSection";
import IntakeSection         from "./dashboard/sections/IntakeSection";
import AppointmentsSection   from "./dashboard/sections/AppointmentsSection";
import AnalyticsSection      from "./dashboard/sections/AnalyticsSection";
import GallerySection        from "./dashboard/sections/GallerySection";
import ChatModal             from "./dashboard/modals/ChatModal";
import InquiryModal          from "./dashboard/modals/InquiryModal";
import ApplicantModal        from "./dashboard/modals/ApplicantModal";
import AppointmentModal      from "./dashboard/modals/AppointmentModal";

export default function Dashboard() {
  const db = useDashboard();

  return (
    <>
      {/* Loading overlay */}
      <div className={`app-loading-overlay${db.appReady ? " hidden" : ""}`}>
        <div className="app-spinner" />
      </div>

      <div className="dashboard">
        {/* Mobile sidebar overlay */}
        <div
          className={`sidebar-overlay${db.mobileOpen ? " active" : ""}`}
          onClick={() => db.setMobileOpen(false)}
        />

        <Sidebar
          section={db.section}
          setSection={db.setSection}
          sidebarCollapsed={db.sidebarCollapsed}
          setSidebarCollapsed={db.setSidebarCollapsed}
          mobileOpen={db.mobileOpen}
          setMobileOpen={db.setMobileOpen}
          headerLabel={db.headerLabel}
          intakeFlow={db.intakeFlow}
          appointmentsFlow={db.appointmentsFlow}
          galleryFlow={db.galleryFlow}
          conversations={db.conversations}
          viewConversation={db.viewConversation}
          handleLogout={db.handleLogout}
        />

        <main className="main-content">
          <button className="mobile-menu-btn" onClick={() => db.setMobileOpen(true)} aria-label="Toggle menu">
            ☰
          </button>

          {db.section === "overview" && (
            <OverviewSection
              stats={db.stats}
              waStatus={db.waStatus}
              waCopied={db.waCopied}
              copyWabaId={db.copyWabaId}
              contactLabel={db.contactLabel}
              categoryLabels={db.categoryLabels}
              intakeFlow={db.intakeFlow}
              admissionsCount={db.admissionsCount}
              setSection={db.setSection}
            />
          )}

          {db.section === "conversations" && (
            <ConversationsSection
              conversations={db.conversations}
              convsLoading={db.convsLoading}
              contactLabel={db.contactLabel}
              viewConversation={db.viewConversation}
            />
          )}

          {db.section === "inquiries" && (
            <InquiriesSection
              groups={db.groupedInquiries()}
              inquiriesLoading={db.inquiriesLoading}
              contactLabel={db.contactLabel}
              viewCustomerInquiries={db.viewCustomerInquiries}
            />
          )}

          {db.section === "intake" && db.intakeFlow?.enabled && (
            <IntakeSection
              intakeFlow={db.intakeFlow}
              admissions={db.admissions}
              admissionsLoading={db.admissionsLoading}
              setApplicantModal={db.setApplicantModal}
              getPrimaryLabel={db.getPrimaryLabel}
              fieldLabel={db.fieldLabel}
            />
          )}

          {db.section === "appointments" && db.appointmentsFlow?.enabled && (
            <AppointmentsSection
              appointmentsFlow={db.appointmentsFlow}
              appointments={db.appointments}
              appointmentsLoading={db.appointmentsLoading}
              setAppointmentModal={db.setAppointmentModal}
            />
          )}

          {db.section === "gallery" && db.galleryFlow?.enabled && (
            <GallerySection
              images={db.galleryImages}
              loading={db.galleryLoading}
              uploading={db.galleryUploading}
              uploadGalleryImage={db.uploadGalleryImage}
              deleteGalleryImage={db.deleteGalleryImage}
            />
          )}

          {db.section === "analytics" && (
            <AnalyticsSection
              stats={db.stats}
              categoryLabels={db.categoryLabels}
            />
          )}
        </main>
      </div>

      {/* PWA Install Banner — shown once branding has loaded */}
      {db.showInstallBanner && <InstallBanner />}

      {/* Modals */}
      <ChatModal
        chatOpen={db.chatOpen}
        setChatOpen={db.setChatOpen}
        chatPhone={db.chatPhone}
        chatName={db.chatName}
        messages={db.messages}
        takeover={db.takeover}
        replyText={db.replyText}
        setReplyText={db.setReplyText}
        sendingReply={db.sendingReply}
        takeoverLoading={db.takeoverLoading}
        messagesEndRef={db.messagesEndRef}
        takeOverConversation={db.takeOverConversation}
        handBackToAI={db.handBackToAI}
        sendAdminReply={db.sendAdminReply}
      />

      <InquiryModal
        open={db.inquiryModalOpen}
        onClose={() => db.setInquiryModalOpen(false)}
        phone={db.inquiryModalPhone}
        name={db.inquiryModalName}
        inquiries={db.customerInquiries}
        loading={db.customerInquiriesLoading}
      />

      {db.intakeFlow && (
        <ApplicantModal
          session={db.applicantModal}
          onClose={() => db.setApplicantModal(null)}
          intakeFlow={db.intakeFlow}
          getPrimaryLabel={db.getPrimaryLabel}
          fieldLabel={db.fieldLabel}
        />
      )}

      {db.appointmentsFlow && (
        <AppointmentModal
          appointment={db.appointmentModal}
          onClose={() => db.setAppointmentModal(null)}
          appointmentsFlow={db.appointmentsFlow}
          appointmentFieldLabel={db.appointmentFieldLabel}
          updateAppointmentStatus={db.updateAppointmentStatus}
          appointmentStatusUpdating={db.appointmentStatusUpdating}
        />
      )}
    </>
  );
}
