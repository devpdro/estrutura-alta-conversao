import S from './prova-social.module.scss';

const ProvaSocial = () => {
    return (
        <section className={S.section}>
            <h2 className={S.title}>
                PROVA <span className={S.titleBlue}>SOCIAL:</span>
            </h2>
            <div className={S.complemento}>COMPLEMENTO</div>
            <div className={S.grid}>
                <div className={S.card}><span className={S.cardText}>PROVA SOCIAL</span></div>
                <div className={S.card}><span className={S.cardText}>PROVA SOCIAL</span></div>
                <div className={S.card}><span className={S.cardText}>PROVA SOCIAL</span></div>
                <div className={S.card}><span className={S.cardText}>PROVA SOCIAL</span></div>
                <div className={S.card}><span className={S.cardText}>PROVA SOCIAL</span></div>
                <div className={S.card}><span className={S.cardText}>PROVA SOCIAL</span></div>
            </div>
            <button className={S.cta} type="button">
                <span role="img" aria-label="relógio">⏰</span> CTA 02
            </button>
        </section>
    );
}

export default ProvaSocial;
