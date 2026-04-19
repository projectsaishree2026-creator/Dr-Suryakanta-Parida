'use client';

import { useState } from 'react';

type AppointmentState = 'idle' | 'loading' | 'success' | 'error';

export function useAppointment() {
  const [state, setState] = useState<AppointmentState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const submit = async (data: Record<string, unknown>) => {
    setState('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submission failed');
      setState('success');
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const reset = () => { setState('idle'); setErrorMsg(''); };

  return { state, errorMsg, submit, reset };
}
