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
}

export type Section = "overview" | "conversations" | "inquiries" | "intake" | "analytics";
