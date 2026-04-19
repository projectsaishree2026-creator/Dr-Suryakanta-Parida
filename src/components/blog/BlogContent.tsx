interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const blocks = content.split('\n\n');

  return (
    <div className="space-y-0">
      {blocks.map((block, bi) => {
        // Numbered list items: "1. text" or "- text"
        if (/^(\d+\.|[-•])\s/.test(block.trim())) {
          const lines = block.split('\n').filter(Boolean);
          const isOrdered = /^\d+\./.test(lines[0]);
          const Tag = isOrdered ? 'ol' : 'ul';
          return (
            <Tag
              key={bi}
              className={`mb-5 pl-5 space-y-1.5 ${
                isOrdered ? 'list-decimal' : 'list-disc'
              }`}
            >
              {lines.map((line, li) => {
                const text = line.replace(/^(\d+\.|[-•])\s/, '');
                const parts = text.split(/\*\*(.*?)\*\*/g);
                return (
                  <li
                    key={li}
                    className="text-[0.95rem] text-charcoal-light leading-[1.82] font-light"
                  >
                    {parts.map((p, pi) =>
                      pi % 2 === 1 ? (
                        <strong key={pi} className="font-semibold text-charcoal">
                          {p}
                        </strong>
                      ) : (
                        p
                      )
                    )}
                  </li>
                );
              })}
            </Tag>
          );
        }

        // Section heading: entire block is **bold**
        if (block.startsWith('**') && block.endsWith('**') && !block.slice(2, -2).includes('\n')) {
          return (
            <h3
              key={bi}
              className="font-heading text-xl font-bold text-charcoal mt-8 mb-3"
            >
              {block.replace(/\*\*/g, '')}
            </h3>
          );
        }

        // Normal paragraph with possible inline bold
        const parts = block.split(/\*\*(.*?)\*\*/g);
        return (
          <p
            key={bi}
            className="text-[0.95rem] text-charcoal-light leading-[1.85] font-light mb-5"
          >
            {parts.map((part, pi) =>
              pi % 2 === 1 ? (
                <strong key={pi} className="font-semibold text-charcoal">
                  {part}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      })}
    </div>
  );
}
