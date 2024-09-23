const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createAcolhido = async (req, reply) => {
    const { nome_acolhido, naturalidade, cpf_acolhido, rg_acolhido, orgao_expedidor_rg, data_nascimento, declaracao_racial, filiacao_pai, filiacao_mae, endereco_familiar, telefone, whatsapp, escolaridade_acolhido, profissao_acolhido, estado_civil_acolhido, apoio_familiar, nome_apoio, endereco_apoio, religiao_acolhido, qual_religiao, ativo, acolhidoFilhos, dados_saude, vida_juridica, substancia, estado_social, termo_guarda} = req.body;
    //const transaction = await prisma.$transaction()
    try {      
        const acolhido = await prisma.acolhido.create({
            data: {
                nome_acolhido,
                naturalidade,
                cpf_acolhido,
                rg_acolhido,
                orgao_expedidor_rg,
                data_nascimento,
                declaracao_racial,
                filiacao_pai,
                filiacao_mae,
                endereco_familiar,
                telefone,
                whatsapp,
                escolaridade_acolhido,
                profissao_acolhido,
                estado_civil_acolhido,
                apoio_familiar,
                nome_apoio,
                endereco_apoio,               
                religiao_acolhido,
                qual_religiao,
                ativo
            }
        });
               
        if (acolhidoFilhos && acolhidoFilhos.length > 0) {
            for (const filho of acolhidoFilhos) {
                await prisma.acolhidoFilho.create({
                    data: {
                        nome_filho: filho.nome_filho,
                        paga_pensao: filho.paga_pensao,
                        id_acolhido: acolhido.id_acolhido
                    }
                });
            }
        }

        await prisma.dadosSaude.create({
            data: {
                tratamento_psiquiatrico: dados_saude.tratamento_psiquiatrico,
                local_tratamento: dados_saude.local_tratamento,
                medicamento_psicotropico: dados_saude.medicamento_psicotropico,
                descricao_psicotropico: dados_saude.descricao_psicotropico,
                medicamento_uso_continuo: dados_saude.medicamento_uso_continuo,
                descricao_uso_continuo: dados_saude.descricao_uso_continuo,
                lesao_fisica: dados_saude.lesao_fisica,
                local_lesao_fisica: dados_saude.local_lesao_fisica,
                doenca_respiratoria: dados_saude.doenca_respiratoria,
                nome_doenca_respiratoria: dados_saude.nome_doenca_respiratoria,
                alergia_alimentar: dados_saude.alergia_alimentar,
                nome_alimento: dados_saude.nome_alimento,
                alergia_medicamentos: dados_saude.alergia_medicamentos,
                nome_alergia_medicamento: dados_saude.nome_alergia_medicamento,
                alguma_doenca: dados_saude.alguma_doenca,
                nome_doenca: dados_saude.nome_doenca,
                problema_coracao: dados_saude.problema_coracao,          
                doenca_coracao: dados_saude.doenca_coracao,
                tem_cancer: dados_saude.tem_cancer,
                historico_cancer: dados_saude.historico_cancer,
                tipo_cancer: dados_saude.tipo_cancer,
                tentativa_suicidio: dados_saude.tentativa_suicidio,
                automutilacao: dados_saude.automutilacao,
                id_acolhido: acolhido.id_acolhido
            }
        });

        await prisma.vidaJuridica.create({
            data: {
                historico_prisao: vida_juridica.historico_prisao,
                motivo_prisao: vida_juridica.motivo_prisao,
                processos: vida_juridica.processos,
                localidade_processo: vida_juridica.localidade_processo,
                uso_tornozeleira: vida_juridica.uso_tornozeleira,
                informou_central: vida_juridica.informou_central,          
                situacao_legal: vida_juridica.situacao_legal,
                motivo_situacao_ilegal: vida_juridica.motivo_situacao_ilegal,
                cumpriu_pena: vida_juridica.cumpriu_pena,
                id_acolhido: acolhido.id_acolhido
            }
        });

        await prisma.substancia.create({
            data: {
                uso_alcool: substancia.uso_alcool,
                motivo_alcool: substancia.motivo_alcool,
                uso_tabaco: substancia.uso_tabaco,
                motivo_tabaco: substancia.motivo_tabaco,
                outras_substancias: substancia.outras_substancias,
                principal_substancia: substancia.principal_substancia,
                motivo_outras_substancias: substancia.motivo_outras_substancias,
                id_acolhido: acolhido.id_acolhido
            }
        })

        await prisma.estadoSocial.create({
            data: {
                situacao_rua: estado_social.situacao_rua,
                motivos_rua: estado_social.motivos_rua,
                outros_centros: estado_social.outros_centros,
                nome_outros_centros: estado_social.nome_outros_centros,
                motivo_saida_outros_centros: estado_social.motivo_saida_outros_centros,
                chegada_missao_vida: estado_social.chegada_missao_vida,
                igreja: estado_social.igreja,
                secretaria_governamental: estado_social.secretaria_governamental,
                sentimentos: estado_social.sentimentos,
                objetivos: estado_social.objetivos,            
                id_acolhido: acolhido.id_acolhido
            }
        });

        await prisma.termoGuarda.create({
            data: {
                autorizacao_guarda: termo_guarda.autorizacao_guarda,
                documentos_guardados: termo_guarda.documentos_guardados,
                descricao_carteira: termo_guarda.descricao_carteira,
                recurso_especie: termo_guarda.recurso_especie,
                aparelho_celular: termo_guarda.aparelho_celular,
                outros_objetos: termo_guarda.outros_objetos,
                id_acolhido: acolhido.id_acolhido
            }
        });

        //await transaction.commit();
        console.log("Acolhido Cadastrado")
        return reply.status(200).send({ message: 'Acolhido cadastrado!' });  
    } catch (error) {
        //await transaction.rollback();
        return reply.status(400).send(error);
    }
};

const updateAcolhido = async (req, reply) => {
    const { nome_acolhido, naturalidade, cpf_acolhido, rg_acolhido, orgao_expedidor_rg, data_nascimento, declaracao_racial, filiacao_pai, filiacao_mae, endereco_familiar, telefone, whatsapp, escolaridade_acolhido, profissao_acolhido, estado_civil_acolhido, apoio_familiar, nome_apoio, endereco_apoio, religiao_acolhido, qual_religiao, ativo, acolhidoFilhos, dados_saude, vida_juridica, substancia, estado_social, termo_guarda } = req.body;

    //const transaction = await prisma.$transaction()
    try {
        await prisma.acolhido.update({
            where: { rg_acolhido },
            data: {
                nome_acolhido,
                naturalidade,
                cpf_acolhido,
                rg_acolhido,
                orgao_expedidor_rg,
                data_nascimento,
                declaracao_racial,
                filiacao_pai,
                filiacao_mae,
                endereco_familiar,
                telefone,
                whatsapp,
                escolaridade_acolhido,
                profissao_acolhido,
                estado_civil_acolhido,
                apoio_familiar,
                nome_apoio,
                endereco_apoio,               
                religiao_acolhido,
                qual_religiao,
                ativo
            }
        });

        const acolhido = await prisma.acolhido.findUnique({
            where: { cpf_acolhido }
        });

        if (acolhidoFilhos && acolhidoFilhos.length > 0) {
            await prisma.acolhidoFilho.deleteMany({
                where: { id_acolhido: acolhido.id_acolhido }
            });
            for (const filho of acolhidoFilhos) {
                await prisma.acolhidoFilho.create({
                    data: {
                        nome_filho: filho.nome_filho,
                        paga_pensao: filho.paga_pensao,
                        id_acolhido: acolhido.id_acolhido
                    }
                });
            }
        }

        const saude = await prisma.dadosSaude.findUnique({
            where: { id_acolhido: acolhido.id_acolhido }
        });

        await prisma.dadosSaude.update({
            where: { id_dados_saude: saude.id_dados_saude },
            data: {
                tratamento_psiquiatrico: dados_saude.tratamento_psiquiatrico,
                local_tratamento: dados_saude.local_tratamento,
                medicamento_psicotropico: dados_saude.medicamento_psicotropico,
                descricao_psicotropico: dados_saude.descricao_psicotropico,
                medicamento_uso_continuo: dados_saude.medicamento_uso_continuo,
                descricao_uso_continuo: dados_saude.descricao_uso_continuo,
                lesao_fisica: dados_saude.lesao_fisica,
                local_lesao_fisica: dados_saude.local_lesao_fisica,
                doenca_respiratoria: dados_saude.doenca_respiratoria,
                nome_doenca_respiratoria: dados_saude.nome_doenca_respiratoria,
                alergia_alimentar: dados_saude.alergia_alimentar,
                nome_alimento: dados_saude.nome_alimento,
                alergia_medicamentos: dados_saude.alergia_medicamentos,
                nome_alergia_medicamento: dados_saude.nome_alergia_medicamento,
                alguma_doenca: dados_saude.alguma_doenca,
                nome_doenca: dados_saude.nome_doenca,
                problema_coracao: dados_saude.problema_coracao,          
                doenca_coracao: dados_saude.doenca_coracao,
                tem_cancer: dados_saude.tem_cancer,
                historico_cancer: dados_saude.historico_cancer,
                tipo_cancer: dados_saude.tipo_cancer,
                tentativa_suicidio: dados_saude.tentativa_suicidio,
                automutilacao: dados_saude.automutilacao
            }
        });

        const vida = await prisma.vidaJuridica.findUnique({
            where: { id_acolhido: acolhido.id_acolhido }
        });

        await prisma.vidaJuridica.update({
            where: { id_vida_juridica: vida.id_vida_juridica },
            data: {
                historico_prisao: vida_juridica.historico_prisao,
                motivo_prisao: vida_juridica.motivo_prisao,
                processos: vida_juridica.processos,
                localidade_processo: vida_juridica.localidade_processo,
                uso_tornozeleira: vida_juridica.uso_tornozeleira,
                informou_central: vida_juridica.informou_central,          
                situacao_legal: vida_juridica.situacao_legal,
                motivo_situacao_ilegal: vida_juridica.motivo_situacao_ilegal,
                cumpriu_pena: vida_juridica.cumpriu_pena
            }
        });

        const subs = await prisma.substancia.findUnique({
            where: { id_acolhido: acolhido.id_acolhido }
        });

        await prisma.substancia.update({
            where: { id_substancia: subs.id_substancia },
            data: {
                uso_alcool: substancia.uso_alcool,
                motivo_alcool: substancia.motivo_alcool,
                uso_tabaco: substancia.uso_tabaco,
                motivo_tabaco: substancia.motivo_tabaco,
                outras_substancias: substancia.outras_substancias,
                principal_substancia: substancia.principal_substancia,
                motivo_outras_substancias: substancia.motivo_outras_substancias
            }
        });

        const social = await prisma.estadoSocial.findUnique({
            where: { id_acolhido: acolhido.id_acolhido }
        });

        await prisma.estadoSocial.update({
            where: { id_estado_social: social.id_estado_social },
            data: {
                situacao_rua: estado_social.situacao_rua,
                motivos_rua: estado_social.motivos_rua,
                outros_centros: estado_social.outros_centros,
                nome_outros_centros: estado_social.nome_outros_centros,
                motivo_saida_outros_centros: estado_social.motivo_saida_outros_centros,
                chegada_missao_vida: estado_social.chegada_missao_vida,
                igreja: estado_social.igreja,
                secretaria_governamental: estado_social.secretaria_governamental,
                sentimentos: estado_social.sentimentos,
                objetivos: estado_social.objetivos
            }
        });

        const guarda = await prisma.termoGuarda.findUnique({
            where: { id_acolhido: acolhido.id_acolhido }
        });

        await prisma.termoGuarda.update({
            where: { id_termo_guarda: guarda.id_termo_guarda },
            data: {
                autorizacao_guarda: termo_guarda.autorizacao_guarda,
                documentos_guardados: termo_guarda.documentos_guardados,
                descricao_carteira: termo_guarda.descricao_carteira,
                recurso_especie: termo_guarda.recurso_especie,
                aparelho_celular: termo_guarda.aparelho_celular,
                outros_objetos: termo_guarda.outros_objetos
            }
        });

        //await transaction.commit();
        console.log("Acolhido Atualizado");
        return reply.status(200).send({ message: 'Acolhido atualizado!' });
    } catch (error) {
        //await transaction.rollback();
        return reply.status(400).send(error);
    }
};

const getAcolhidos = async (req, reply) => {
    try {
        const acolhidos = await prisma.acolhido.findMany({
            include: {
                filho: true,
                saude: true,
                vidajuridica: true,
                substancia: true,
                social: true,
                termoguarda: true
            }
        });
        return reply.send(acolhidos);
    } catch (error) {
        return reply.status(400).send(error);
    }
};

const getAcolhidoById = async (req, reply) => {
    const { id_acolhido } = req.params;
    const id = parseInt(id_acolhido)
    try {
        const acolhido = await prisma.acolhido.findUnique({
            where: { id_acolhido : id },
            include: {
                filho: true,
                saude: true,
                vidajuridica: true,
                substancia: true,
                social: true,
                termoguarda: true
            }
        });
        
        if (!acolhido) {
            return reply.status(404).send({ message: "Acolhido não encontrado" });
        }
        
        return reply.send(acolhido);
    } catch (error) {
        return reply.status(400).send(error);
    }
};

module.exports = {
    createAcolhido,
    updateAcolhido,
    getAcolhidos,
    getAcolhidoById
};