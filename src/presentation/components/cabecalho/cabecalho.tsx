import S from './cabecalho.module.scss';

const Cabecalho = () => {
    return (
        <section className={S.section}>
            <h1 className={S.headline}>INSIRA SUA</h1>
            <h2 className={S.subheadline}>HEADLINE AQUI</h2>
            <div className={S.imagemArea}>
                <span className={S.imagemTexto}>IMAGEM DO<br />SEU PRODUTO</span>
            </div>
            <div className={S.complemento}>COMPLEMENTO</div>
            <button className={S.cta}>CTA 01</button>
        </section>
    );
}

export default Cabecalho;