import React, { useState } from "react";
import S from "./faq.module.scss";

const faqs = [
    { pergunta: "DÚVIDA 01", resposta: "RESPOSTA 01" },
    { pergunta: "DÚVIDA 02", resposta: "RESPOSTA 02" },
    { pergunta: "DÚVIDA 03", resposta: "RESPOSTA 03" },
    { pergunta: "DÚVIDA 04", resposta: "RESPOSTA 04" },
    { pergunta: "DÚVIDA 05", resposta: "RESPOSTA 05" },
    { pergunta: "DÚVIDA 06", resposta: "RESPOSTA 06" },
];

const FAQ = () => {
    const [aberta, setAberta] = useState<number | null>(0);
    const toggle = (idx: number) => setAberta(aberta === idx ? null : idx);
    return (
        <section className={S.section}>
            <h2 className={S.title}>Dúvidas Frequentes:</h2>
            <div className={S.lista}>
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className={S.item + (aberta === idx ? ' ' + S.itemAberto : '')}
                    >
                        <button
                            className={S.pergunta}
                            onClick={() => toggle(idx)}
                            aria-expanded={aberta === idx}
                        >
                            <span className={S.icone}>📌</span>
                            <span className={S.perguntaTexto}>{faq.pergunta}</span>
                            <span className={S.toggle}>{aberta === idx ? '-' : '+'}</span>
                        </button>
                        {aberta === idx && (
                            <div className={S.resposta}>{faq.resposta}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
