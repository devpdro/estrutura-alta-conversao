import S from './oferta.module.scss';

const Oferta = () => {
    return (
        <section className={S.section}>
            <h2 className={S.title}>OFERTA</h2>
            <div className={S.imagemArea}>
                <span className={S.imagemTexto}>IMAGEM DO<br />SEU PRODUTO</span>
            </div>
            <div className={S.cardOferta}>
                <div className={S.precoDe}>De R$X</div>
                <div className={S.preco}>2x de R$X</div>
                <div className={S.precoVista}>OU R$X à vista</div>
                <button className={S.cta}>CTA</button>
                <div className={S.icones}>
                    <span>🛡️ Compra Segura</span>
                    <span>💬 Suporte Garantido</span>
                    <span>🔒 Privacidade Protegida</span>
                </div>
            </div>
            <div className={S.bonusAviso}><span className={S.icon}>🛑</span>Bônus válidos por tempo limitado.</div>
        </section>
    );
}

export default Oferta;
