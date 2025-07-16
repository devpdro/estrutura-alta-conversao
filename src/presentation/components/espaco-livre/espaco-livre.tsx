import S from './espaco-livre.module.scss';

const EspacoLivre = () => {
    return (
        <section className={S.section}>
            <div className={S.info}>
                <h2 className={S.title}>ESPAÇO LIVRE</h2>
                <div className={S.detalhamento}>DETALHAMENTO</div>
            </div>
            <div className={S.imagemArea}>
                <span className={S.imagemTexto}>IMAGEM DO<br />SEU PRODUTO</span>
            </div>
        </section>
    );
}

export default EspacoLivre;
