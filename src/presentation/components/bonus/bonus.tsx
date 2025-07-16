import S from './bonus.module.scss';

const Bonus = () => {
    return (
        <section className={S.section}>
            <h2 className={S.title}><span className={S.titleBlue}>04 BÔNUS</span> incríveis apenas hoje</h2>
            <div className={S.subtitulo}><span className={S.icon}>🛑</span> Bônus válidos por tempo limitado.</div>
            <div className={S.grid}>
                <div className={S.card}>
                    <span className={S.cardIcon}>🎁</span>
                    <div className={S.cardTitle}>BÔNUS #1</div>
                    <div className={S.cardDetalhe}>DETALHES DO BÔNUS</div>
                    <div className={S.cardImagem}>BÔNUS</div>
                </div>
                <div className={S.card}>
                    <span className={S.cardIcon}>🎁</span>
                    <div className={S.cardTitle}>BÔNUS #2</div>
                    <div className={S.cardDetalhe}>DETALHES DO BÔNUS</div>
                    <div className={S.cardImagem}>BÔNUS</div>
                </div>
                <div className={S.card}>
                    <span className={S.cardIcon}>🎁</span>
                    <div className={S.cardTitle}>BÔNUS #3</div>
                    <div className={S.cardDetalhe}>DETALHES DO BÔNUS</div>
                    <div className={S.cardImagem}>BÔNUS</div>
                </div>
                <div className={S.card}>
                    <span className={S.cardIcon}>🎁</span>
                    <div className={S.cardTitle}>BÔNUS #4</div>
                    <div className={S.cardDetalhe}>DETALHES DO BÔNUS</div>
                    <div className={S.cardImagem}>BÔNUS</div>
                </div>
            </div>
        </section>
    );
}

export default Bonus;
