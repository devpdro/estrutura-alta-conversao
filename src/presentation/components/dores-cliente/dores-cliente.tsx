import S from './dores-cliente.module.scss';

const DoresCliente = () => {
    return (
        <section className={S.section}>
            <h2 className={S.title}>DORES DO SEU CLIENTE</h2>
            <div className={S.complemento}>COMPLEMENTO</div>
            <div className={S.lista}>
                <div className={S.item}><span className={S.icon}>❌</span>DOR/PROBLEMA 01</div>
                <div className={S.item}><span className={S.icon}>❌</span>DOR/PROBLEMA 02</div>
                <div className={S.item}><span className={S.icon}>❌</span>DOR/PROBLEMA 03</div>
                <div className={S.item}><span className={S.icon}>❌</span>DOR/PROBLEMA 04</div>
            </div>
        </section>
    );
}

export default DoresCliente; 