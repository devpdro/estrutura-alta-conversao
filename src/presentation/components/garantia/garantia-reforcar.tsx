import S from './garantia-reforcar.module.scss';

const GarantiaReforcar = () => {
    return (
        <section className={S.section}>
            <div className={S.seloArea}>
                {/* Substitua por uma imagem real se disponível */}
                <img className={S.selo} src="/selo-garantia.png" alt="Satisfação 100% Garantida" />
            </div>
            <h2 className={S.title}>REFORÇAR GARANTIA</h2>
            <div className={S.detalhamento}>DATALHAMENTO</div>
            <button className={S.cta}>CTA</button>
        </section>
    );
}

export default GarantiaReforcar;
