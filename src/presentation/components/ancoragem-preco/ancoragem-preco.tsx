import S from './ancoragem-preco.module.scss';

const AncoragemPreco = () => {
    return (
        <section className={S.section}>
            <h2 className={S.title}>ANCORAGEM DE PREÇO</h2>
            <ul className={S.lista}>
                <li className={S.item}><span className={S.icon}>✔️</span>ENTREGÁVEL 01</li>
                <li className={S.item}><span className={S.icon}>✔️</span>ENTREGÁVEL 02</li>
                <li className={S.item}><span className={S.icon}>✔️</span>ENTREGÁVEL 03</li>
                <li className={S.item}><span className={S.icon}>✔️</span>ENTREGÁVEL 04</li>
                <li className={S.item}><span className={S.icon}>✔️</span>ENTREGÁVEL 05</li>
                <li className={S.item}><span className={S.icon}>✔️</span>ENTREGÁVEL 06</li>
                <li className={S.item}><span className={S.icon}>✔️</span>ENTREGÁVEL 07</li>
            </ul>
            <div className={S.ancoragem}>No total, isso tudo deveria custar...</div>
            <div className={S.preco}>R$97,00</div>
        </section>
    );
}

export default AncoragemPreco;
