import S from './depois-comprar.module.scss';

const DepoisComprar = () => {
    return (
        <section className={S.section}>
            <h2 className={S.title}>O que acontece depois que eu comprar?</h2>
            <div className={S.grid}>
                <div className={S.card}>
                    <span className={S.icon}>📧</span>
                    <div className={S.cardTitle}>Acesso imediato</div>
                    <div className={S.cardDesc}>Após a aprovação da compra, você receberá um e-mail e/ou WhatsApp para acessar a área de membros.</div>
                </div>
                <div className={S.card}>
                    <span className={S.icon}>🛡️</span>
                    <div className={S.cardTitle}>Segurança</div>
                    <div className={S.cardDesc}>Suas informações são protegidas e seus direitos como consumidor garantidos.</div>
                </div>
                <div className={S.card}>
                    <span className={S.icon}>💬</span>
                    <div className={S.cardTitle}>Suporte</div>
                    <div className={S.cardDesc}>Grupo de suporte para todos os alunos diretamente com o seu mentor.</div>
                </div>
            </div>
        </section>
    );
}

export default DepoisComprar;
