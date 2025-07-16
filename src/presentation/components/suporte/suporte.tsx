import S from './suporte.module.scss';

const Suporte = () => {
    return (
        <section className={S.section}>
            <div className={S.colLeft}>
                <div className={S.direitos}>© Todos os direitos reservados.</div>
                <div className={S.isencao}>
                    Este site não possui vínculo com o Facebook ou qualquer empresa do grupo Meta.<br />
                    Ao sair do Facebook, toda responsabilidade passa a ser nossa. A aquisição deste material não garante resultados específicos.
                </div>
            </div>
            <div className={S.colRight}>
                <div className={S.duvida}><b>Precisa de ajuda?</b></div>
                <div className={S.suporte}>Entre em contato pelo e-mail:<br /><b>SEU EMAIL DE SUPORTE AQUI</b></div>
            </div>
        </section>
    );
}

export default Suporte;
