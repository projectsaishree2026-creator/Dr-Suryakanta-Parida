export type AppointmentPayload = {
  name: string;
  phone: string;
  email?: string;
  preferredDate?: string;
  concern: string;
  notes?: string;
};

export type AppointmentResponse = {
  success: boolean;
  message: string;
  appointmentId?: string;
};

export async function bookAppointment(
  data: AppointmentPayload
): Promise<AppointmentResponse> {
  const res = await fetch('/api/appointment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Failed to book appointment');
  }

  return res.json();
}
