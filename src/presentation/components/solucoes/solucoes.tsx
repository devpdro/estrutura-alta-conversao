import S from './solucoes.module.scss';

const Solucoes = () => {
    return (
        <section className={S.section}>
            <h2 className={S.title}>COMO SEU PRODUTO RESOLVE A DOR</h2>
            <div className={S.solucoes}>
                <div className={S.bloco + ' ' + S.bgLight}>
                    <div className={S.info}>
                        <h3 className={S.subtitulo}>SOLUÇÃO 01</h3>
                        <div className={S.complemento}>COMPLEMENTO</div>
                    </div>
                    <div className={S.imagemArea}>
                        <span className={S.imagemTexto}>IMAGEM DO SEU<br />PRODUTO<br />SOLUCIONANDO</span>
                    </div>
                </div>
                <div className={S.bloco + ' ' + S.bgDark}>
                    <div className={S.info}>
                        <h3 className={S.subtitulo}>SOLUÇÃO 02</h3>
                        <div className={S.complemento}>COMPLEMENTO</div>
                    </div>
                    <div className={S.imagemArea}>
                        <span className={S.imagemTexto}>IMAGEM DO SEU<br />PRODUTO<br />SOLUCIONANDO</span>
                    </div>
                </div>
                <div className={S.bloco + ' ' + S.bgLight}>
                    <div className={S.info}>
                        <h3 className={S.subtitulo}>SOLUÇÃO 03</h3>
                        <div className={S.complemento}>COMPLEMENTO</div>
                    </div>
                    <div className={S.imagemArea}>
                        <span className={S.imagemTexto}>IMAGEM DO SEU<br />PRODUTO<br />SOLUCIONANDO</span>
                    </div>
                </div>
                <div className={S.bloco + ' ' + S.bgDark}>
                    <div className={S.info}>
                        <h3 className={S.subtitulo}>SOLUÇÃO 04</h3>
                        <div className={S.complemento}>COMPLEMENTO</div>
                    </div>
                    <div className={S.imagemArea}>
                        <span className={S.imagemTexto}>IMAGEM DO SEU<br />PRODUTO<br />SOLUCIONANDO</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Solucoes;
