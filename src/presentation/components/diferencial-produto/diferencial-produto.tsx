import S from './diferencial-produto.module.scss';

const DiferencialProduto = () => {
    return (
        <section className={S.section}>
            <h2 className={S.title}>DIFERENCIAL DO<br />SEU PRODUTO</h2>
            <div className={S.content}>
                <div className={S.left}>
                    <div className={S.complemento}>COMPLEMENTO</div>
                    <div className={S.lista}>
                        <div className={S.item}><span className={S.icon}>✔️</span>PONTO FORTE 01</div>
                        <div className={S.item}><span className={S.icon}>✔️</span>PONTO FORTE 02</div>
                        <div className={S.item}><span className={S.icon}>📱</span>PONTO FORTE 03</div>
                        <div className={S.item}><span className={S.icon}>🕑</span>PONTO FORTE 04</div>
                        <div className={S.item}><span className={S.icon}>🗓️</span>PONTO FORTE 05</div>
                        <div className={S.item}><span className={S.icon}>☑️</span>PONTO FORTE 06</div>
                        <div className={S.item}><span className={S.icon}>✔️</span>PONTO FORTE 07</div>
                    </div>
                    <button className={S.cta}><span role="img" aria-label="relógio">⏰</span> CTA</button>
                </div>
                <div className={S.imagemArea}>
                    <span className={S.imagemTexto}>IMAGEM DO<br />SEU PRODUTO</span>
                </div>
            </div>
        </section>
    );
}

export default DiferencialProduto;
