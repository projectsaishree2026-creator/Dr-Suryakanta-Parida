import { MAPS_EMBED_URL } from '@/lib/constants';
// Embeds google.com/maps for SCB Medical College, Cuttack (see MAPS_EMBED_URL in constants.ts)

export default function Map() {
  return (
    <div className="rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-soft">
      <iframe
        title="SCB Medical College & Sai Shree Polyclinic – Cuttack Location"
        src={MAPS_EMBED_URL}
        width="100%"
        height="280"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
