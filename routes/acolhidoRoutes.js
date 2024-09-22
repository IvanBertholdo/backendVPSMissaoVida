const acolhidoController = require('../controllers/acolhidoController');

async function acolhidoRoutes(fastify, options) {
    // Rota para criar um novo acolhido
    fastify.post('/Acolhido', {
        schema: {
            description: 'Cria um novo paciente',
            tags: ['Acolhido'],
            consumes: ['application/json'],
            produces: ['application/json'],
            body: {
                type: 'object',
                properties: {
                    nome_acolhido: { type: 'string' },
                    naturalidade: { type: 'string' },
                    cpf_acolhido: { type: 'string' },
                    rg_acolhido: { type: 'string' },
                    orgao_expedidor_rg: { type: 'string' },
                    data_nascimento: { type: 'string', format:'date'},
                    declaracao_racial: { type: 'string' },
                    filiacao_pai: { type: 'string' },
                    filiacao_mae: { type: 'string' },
                    endereco_familiar: { type: 'string' },
                    telefone: { type: 'string' },
                    whatsapp: { type: 'string' },
                    escolaridade_acolhido: { type: 'string' },
                    profissao_acolhido: { type: 'string' },
                    estado_civil_acolhido: { type: 'string' },
                    apoio_familiar: { type: 'boolean' },
                    nome_apoio: { type: 'string' },
                    endereco_apoio: { type: 'string' },
                    religiao_acolhido: { type: 'boolean' },
                    qual_religiao: { type: 'string' },
                    ativo: { type: 'boolean' },
                    acolhidoFilhos: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                nome_filho: { type: 'string' },
                                paga_pensao: { type: 'boolean' }
                            },
                            required: ['nome_filho', 'paga_pensao']
                        }
                    },
                    dados_saude: {
                        type: 'object',
                        properties: {
                            tratamento_psiquiatrico: { type: 'boolean' },
                            local_tratamento: { type: 'string' },
                            medicamento_psicotropico: { type: 'boolean' },
                            descricao_psicotropico: { type: 'string' },
                            medicamento_uso_continuo: { type: 'boolean' },
                            descricao_uso_continuo: { type: 'string' },
                            lesao_fisica: { type: 'boolean' },
                            local_lesao_fisica: { type: 'string' },
                            doenca_respiratoria: { type: 'boolean' },
                            nome_doenca_respiratoria: { type: 'string' },
                            alergia_alimentar: { type: 'boolean' },
                            nome_alimento: { type:'string' },
                            alergia_medicamentos: { type: 'boolean' },
                            nome_alergia_medicamento: { type: 'string' },
                            alguma_doenca: { type: 'boolean' },
                            nome_doenca: { type: 'string' },
                            problema_coracao: { type: 'boolean' },
                            doenca_coracao: { type: 'string' },
                            tem_cancer: { type: 'boolean' },
                            historico_cancer: { type: 'string' },
                            tipo_cancer: { type: 'string' },
                            tentativa_suicidio: { type: 'boolean' },
                            automutilacao: { type: 'boolean' }                       
                        },
                        required: [
                            'tratamento_psiquiatrico',
                            'local_tratamento',
                            'medicamento_psicotropico',
                            'descricao_psicotropico',
                            'medicamento_uso_continuo',
                            'descricao_uso_continuo',
                            'lesao_fisica',
                            'local_lesao_fisica',
                            'doenca_respiratoria',
                            'nome_doenca_respiratoria',
                            'alergia_alimentar',
                            'nome_alimento',
                            'alergia_medicamentos',
                            'nome_alergia_medicamento',
                            'alguma_doenca',
                            'nome_doenca',
                            'problema_coracao',
                            'doenca_coracao',
                            'tem_cancer',
                            'historico_cancer',
                            'tipo_cancer',
                            'tentativa_suicidio',
                            'automutilacao'
                        ]
                    },
                    vida_juridica: {
                        type: 'object',
                        properties: {
                            historico_prisao: { type: 'boolean' },
                            motivo_prisao: { type: 'string' },
                            processos: { type: 'boolean' },
                            localidade_processo: { type: 'string' },
                            uso_tornozeleira: { type: 'boolean' },
                            informou_central: { type: 'boolean' },
                            situacao_legal: { type: 'boolean' },
                            motivo_situacao_ilegal: { type: 'string' },
                            cumpriu_pena: { type: 'boolean' }
                        },
                        required: [
                            'historico_prisao',
                            'motivo_prisao',
                            'processos',
                            'localidade_processo',
                            'uso_tornozeleira',
                            'informou_central',
                            'situacao_legal',
                            'motivo_situacao_ilegal',
                            'cumpriu_pena'
                        ]
                    },
                    substancia: {
                        type: 'object',
                        properties: {
                            uso_alcool: { type: 'boolean' },
                            motivo_alcool: { type: 'string' },
                            uso_tabaco: { type: 'boolean' },
                            motivo_tabaco: { type: 'string' },
                            outras_substancias: { type: 'boolean' },
                            principal_substancia: { type: 'string' },
                            motivo_outras_substancias: { type: 'string' }
                        },
                        required: [
                            'uso_alcool',
                            'motivo_alcool',
                            'uso_tabaco',
                            'motivo_tabaco',
                            'outras_substancias',
                            'principal_substancia',
                            'motivo_outras_substancias'                
                        ]             
                    },
                    estado_social: {
                        type: 'object',
                        properties: {
                            situacao_rua: { type: 'boolean' },
                            motivos_rua: { type: 'string' },
                            outros_centros: { type: 'boolean' },
                            nome_outros_centros: { type: 'string' },
                            motivo_saida_outros_centros: { type: 'string' },
                            chegada_missao_vida: { 'type': 'string' },
                            igreja: { 'type': 'string' },
                            secretaria_governamental: { 'type': 'string' },
                            sentimentos: { type: 'string' },
                            objetivos: { type: 'string' }
                        },
                        required: [
                            'situacao_rua',
                            'motivos_rua',
                            'outros_centros',
                            'nome_outros_centros',
                            'motivo_saida_outros_centros',
                            'chegada_missao_vida',
                            'igreja',
                            'secretaria_governamental',
                            'sentimentos',
                            'objetivos'      
                        ]
                    },
                    termo_guarda: {
                        type: 'object',
                        properties: {
                            autorizacao_guarda: { type: 'boolean' },
                            documentos_guardados: { type: 'string' },
                            descricao_carteira: { type: 'string' },
                            recurso_especie: { type: 'number' },
                            aparelho_celular: { type: 'string' },
                            outros_objetos: { type: 'string' }
                        },
                        required: [
                            'autorizacao_guarda',
                            'documentos_guardados',
                            'descricao_carteira',
                            'recurso_especie',
                            'aparelho_celular',
                            'outros_objetos'
                        ]
                    },
                },
                required: [
                    'nome_acolhido', 
                    'naturalidade', 
                    'cpf_acolhido', 
                    'rg_acolhido', 
                    'orgao_expedidor_rg', 
                    'data_nascimento', 
                    'declaracao_racial', 
                    'filiacao_pai', 
                    'filiacao_mae', 
                    'endereco_familiar', 
                    'telefone', 
                    'whatsapp', 
                    'escolaridade_acolhido', 
                    'profissao_acolhido', 
                    'estado_civil_acolhido', 
                    'apoio_familiar', 
                    'nome_apoio',
                    'endereco_apoio',
                    'religiao_acolhido',
                    'qual_religiao',
                    //'filhos_acolhido', 
                    'ativo',
                    //'acolhidoFilhos',
                    'dados_saude',
                    'vida_juridica',
                    'substancia',
                    'estado_social',
                    'termo_guarda'
                ]
            },
            response: {
                201: {
                    description: 'Acolhido criado com sucesso',
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                        acolhido: { type: 'object' }
                    }
                },
                400: {
                    description: 'Erro ao criar acolhido',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        preHandler: [fastify.authenticate],
        handler: acolhidoController.createAcolhido
    });

    // Rota para atualizar um acolhido existente
    fastify.put('/Acolhido', {
        schema: {
            description: 'Atualiza um acolhido',
            tags: ['Acolhido'],
            consumes: ['application/json'],
            produces: ['application/json'],
            body: {
                type: 'object',
                properties: {
                    nome_acolhido: { type: 'string' },
                    naturalidade: { type: 'string' },
                    cpf_acolhido: { type: 'string' },
                    rg_acolhido: { type: 'string' },
                    orgao_expedidor_rg: { type: 'string' },
                    data_nascimento: { type: 'string', format:'date'},
                    declaracao_racial: { type: 'string' },
                    filiacao_pai: { type: 'string' },
                    filiacao_mae: { type: 'string' },
                    endereco_familiar: { type: 'string' },
                    telefone: { type: 'string' },
                    whatsapp: { type: 'string' },
                    escolaridade_acolhido: { type: 'string' },
                    profissao_acolhido: { type: 'string' },
                    estado_civil_acolhido: { type: 'string' },
                    apoio_familiar: { type: 'boolean' },
                    nome_apoio: { type: 'string' },
                    endereco_apoio: { type: 'string' },
                    religiao_acolhido: { type: 'boolean' },
                    qual_religiao: { type: 'string' },
                    ativo: { type: 'boolean' },
                    acolhidoFilhos: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                nome_filho: { type: 'string' },
                                paga_pensao: { type: 'boolean' }
                            },
                            required: ['nome_filho', 'paga_pensao']
                        }
                    },
                    dados_saude: {
                        type: 'object',
                        properties: {
                            tratamento_psiquiatrico: { type: 'boolean' },
                            local_tratamento: { type: 'string' },
                            medicamento_psicotropico: { type: 'boolean' },
                            descricao_psicotropico: { type: 'string' },
                            medicamento_uso_continuo: { type: 'boolean' },
                            descricao_uso_continuo: { type: 'string' },
                            lesao_fisica: { type: 'boolean' },
                            local_lesao_fisica: { type: 'string' },
                            doenca_respiratoria: { type: 'boolean' },
                            nome_doenca_respiratoria: { type: 'string' },
                            alergia_alimentar: { type: 'boolean' },
                            nome_alimento: { type:'string' },
                            alergia_medicamentos: { type: 'boolean' },
                            nome_alergia_medicamento: { type: 'string' },
                            alguma_doenca: { type: 'boolean' },
                            nome_doenca: { type: 'string' },
                            problema_coracao: { type: 'boolean' },
                            doenca_coracao: { type: 'string' },
                            tem_cancer: { type: 'boolean' },
                            historico_cancer: { type: 'string' },
                            tipo_cancer: { type: 'string' },
                            tentativa_suicidio: { type: 'boolean' },
                            automutilacao: { type: 'boolean' }                       
                        },
                        required: [
                            'tratamento_psiquiatrico',
                            'local_tratamento',
                            'medicamento_psicotropico',
                            'descricao_psicotropico',
                            'medicamento_uso_continuo',
                            'descricao_uso_continuo',
                            'lesao_fisica',
                            'local_lesao_fisica',
                            'doenca_respiratoria',
                            'nome_doenca_respiratoria',
                            'alergia_alimentar',
                            'nome_alimento',
                            'alergia_medicamentos',
                            'nome_alergia_medicamento',
                            'alguma_doenca',
                            'nome_doenca',
                            'problema_coracao',
                            'doenca_coracao',
                            'tem_cancer',
                            'historico_cancer',
                            'tipo_cancer',
                            'tentativa_suicidio',
                            'automutilacao'
                        ]
                    },
                    vida_juridica: {
                        type: 'object',
                        properties: {
                            historico_prisao: { type: 'boolean' },
                            motivo_prisao: { type: 'string' },
                            processos: { type: 'boolean' },
                            localidade_processo: { type: 'string' },
                            uso_tornozeleira: { type: 'boolean' },
                            informou_central: { type: 'boolean' },
                            situacao_legal: { type: 'boolean' },
                            motivo_situacao_ilegal: { type: 'string' },
                            cumpriu_pena: { type: 'boolean' }
                        },
                        required: [
                            'historico_prisao',
                            'motivo_prisao',
                            'processos',
                            'localidade_processo',
                            'uso_tornozeleira',
                            'informou_central',
                            'situacao_legal',
                            'motivo_situacao_ilegal',
                            'cumpriu_pena'
                        ]
                    },
                    substancia: {
                        type: 'object',
                        properties: {
                            uso_alcool: { type: 'boolean' },
                            motivo_alcool: { type: 'string' },
                            uso_tabaco: { type: 'boolean' },
                            motivo_tabaco: { type: 'string' },
                            outras_substancias: { type: 'boolean' },
                            principal_substancia: { type: 'string' },
                            motivo_outras_substancias: { type: 'string' }
                        },
                        required: [
                            'uso_alcool',
                            'motivo_alcool',
                            'uso_tabaco',
                            'motivo_tabaco',
                            'outras_substancias',
                            'principal_substancia',
                            'motivo_outras_substancias'                
                        ]             
                    },
                    estado_social: {
                        type: 'object',
                        properties: {
                            situacao_rua: { type: 'boolean' },
                            motivos_rua: { type: 'string' },
                            outros_centros: { type: 'boolean' },
                            nome_outros_centros: { type: 'string' },
                            motivo_saida_outros_centros: { type: 'string' },
                            chegada_missao_vida: { 'type': 'string' },
                            igreja: { 'type': 'string' },
                            secretaria_governamental: { 'type': 'string' },
                            sentimentos: { type: 'string' },
                            objetivos: { type: 'string' },
                        },
                        required: [
                            'situacao_rua',
                            'motivos_rua',
                            'outros_centros',
                            'nome_outros_centros',
                            'motivo_saida_outros_centros',
                            'chegada_missao_vida',
                            'igreja',
                            'secretaria_governamental',
                            'sentimentos',
                            'objetivos'      
                        ]
                    },
                    termo_guarda: {
                        type: 'object',
                        properties: {
                            autorizacao_guarda: { type: 'boolean' },
                            documentos_guardados: { type: 'string' },
                            descricao_carteira: { type: 'string' },
                            recurso_especie: { type: 'number' },
                            aparelho_celular: { type: 'string' },
                            outros_objetos: { type: 'string' }
                        },
                        required: [
                            'autorizacao_guarda',
                            'documentos_guardados',
                            'descricao_carteira',
                            'recurso_especie',
                            'aparelho_celular',
                            'outros_objetos'
                        ]
                    },
                },
                required: [
                    'nome_acolhido', 
                    'naturalidade', 
                    'cpf_acolhido', 
                    'rg_acolhido', 
                    'orgao_expedidor_rg', 
                    'data_nascimento', 
                    'declaracao_racial', 
                    'filiacao_pai', 
                    'filiacao_mae', 
                    'endereco_familiar', 
                    'telefone', 
                    'whatsapp', 
                    'escolaridade_acolhido', 
                    'profissao_acolhido', 
                    'estado_civil_acolhido', 
                    'apoio_familiar', 
                    'nome_apoio',
                    'endereco_apoio',
                    'religiao_acolhido',
                    'qual_religiao',
                    //'filhos_acolhido', 
                    'ativo',
                    //'acolhidoFilhos',
                    'dados_saude',
                    'vida_juridica',
                    'substancia',
                    'estado_social',
                    'termo_guarda'
                ]
            },
            response: {
                200: {
                    description: 'Acolhido atualizado com sucesso',
                    type: 'null'
                },
                400: {
                    description: 'Erro ao atualizar acolhido',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        preHandler: [fastify.authenticate],
        handler: acolhidoController.updateAcolhido
    });

    // Rota para obter todos os acolhidos
    fastify.get('/Acolhidos', {
        schema: {
            description: 'Obtém a lista de todos os acolhidos',
            tags: ['Acolhido'],
            response: {
                200: {
                    description: 'Lista de acolhidos recuperada com sucesso',
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            nome_acolhido: { type: 'string' },
                            naturalidade: { type: 'string' },
                            cpf_acolhido: { type: 'string' },
                            rg_acolhido: { type: 'string' },
                            orgao_expedidor_rg: { type: 'string' },
                            data_nascimento: { type: 'string', format:'date'},
                            declaracao_racial: { type: 'string' },
                            filiacao_pai: { type: 'string' },
                            filiacao_mae: { type: 'string' },
                            endereco_familiar: { type: 'string' },
                            telefone: { type: 'string' },
                            whatsapp: { type: 'string' },
                            escolaridade_acolhido: { type: 'string' },
                            profissao_acolhido: { type: 'string' },
                            estado_civil_acolhido: { type: 'string' },
                            apoio_familiar: { type: 'boolean' },
                            nome_apoio: { type: 'string' },
                            endereco_apoio: { type: 'string' },
                            religiao_acolhido: { type: 'boolean' },
                            qual_religiao: { type: 'string' },
                            ativo: { type: 'boolean' },
                            filho: {  //Esta referência a tabela filho está no schema.prisma
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        nome_filho: { type: 'string' },
                                        paga_pensao: { type: 'boolean' }
                                    }
                                }
                            },
                            saude: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        tratamento_psiquiatrico: { type: 'boolean' },
                                        local_tratamento: { type: 'string' },
                                        medicamento_psicotropico: { type: 'boolean' },
                                        descricao_psicotropico: { type: 'string' },
                                        medicamento_uso_continuo: { type: 'boolean' },
                                        descricao_uso_continuo: { type: 'string' },
                                        lesao_fisica: { type: 'boolean' },
                                        local_lesao_fisica: { type: 'string' },
                                        doenca_respiratoria: { type: 'boolean' },
                                        nome_doenca_respiratoria: { type: 'string' },
                                        alergia_alimentar: { type: 'boolean' },
                                        nome_alimento: { type:'string' },
                                        alergia_medicamentos: { type: 'boolean' },
                                        nome_alergia_medicamento: { type: 'string' },
                                        alguma_doenca: { type: 'boolean' },
                                        nome_doenca: { type: 'string' },
                                        problema_coracao: { type: 'boolean' },
                                        doenca_coracao: { type: 'string' },
                                        tem_cancer: { type: 'boolean' },
                                        historico_cancer: { type: 'string' },
                                        tipo_cancer: { type: 'string' },
                                        tentativa_suicidio: { type: 'boolean' },
                                        automutilacao: { type: 'boolean' } 
                                    }
                                }
                            },
                            vidajuridica: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        historico_prisao: { type: 'boolean' },
                                        motivo_prisao: { type: 'string' },
                                        processos: { type: 'boolean' },
                                        localidade_processo: { type: 'string' },
                                        uso_tornozeleira: { type: 'boolean' },
                                        informou_central: { type: 'boolean' },
                                        situacao_legal: { type: 'boolean' },
                                        motivo_situacao_ilegal: { type: 'string' },
                                        cumpriu_pena: { type: 'boolean' }
                                    }
                                }
                            },
                            substancia: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        uso_alcool: { type: 'boolean' },
                                        motivo_alcool: { type: 'string' },
                                        uso_tabaco: { type: 'boolean' },
                                        motivo_tabaco: { type: 'string' },
                                        outras_substancias: { type: 'boolean' },
                                        principal_substancia: { type: 'string' },
                                        motivo_outras_substancias: { type: 'string' }
                                    }
                                }
                            },
                            social: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        situacao_rua: { type: 'boolean' },
                                        motivos_rua: { type: 'string' },
                                        outros_centros: { type: 'boolean' },
                                        nome_outros_centros: { type: 'string' },
                                        motivo_saida_outros_centros: { type: 'string' },
                                        chegada_missao_vida: { 'type': 'string' },
                                        igreja: { 'type': 'string' },
                                        secretaria_governamental: { 'type': 'string' },
                                        sentimentos: { type: 'string' },
                                        objetivos: { type: 'string' }
                                    }
                                }
                            },
                            termoguarda: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        autorizacao_guarda: { type: 'boolean' },
                                        documentos_guardados: { type: 'string' },
                                        descricao_carteira: { type: 'string' },
                                        recurso_especie: { type: 'number' },
                                        aparelho_celular: { type: 'string' },
                                        outros_objetos: { type: 'string' }
                                    }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: 'Erro ao obter acolhidos',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        preHandler: [fastify.authenticate],
        handler: acolhidoController.getAcolhidos
    });

    // Rota para obter um acolhido por ID
    fastify.get('/Acolhido/:id_acolhido', {
        schema: {
            description: 'Obtém um acolhido pelo ID',
            tags: ['Acolhido'],
            params: {
                type: 'object',
                properties: {
                    id_acolhido: { type: 'string' }
                },
                required: ['id_acolhido']
            },
            response: {
                200: {
                    description: 'Acolhido recuperado com sucesso',
                    type: 'object',
                        properties: {
                            nome_acolhido: { type: 'string' },
                            naturalidade: { type: 'string' },
                            cpf_acolhido: { type: 'string' },
                            rg_acolhido: { type: 'string' },
                            orgao_expedidor_rg: { type: 'string' },
                            data_nascimento: { type: 'string', format:'date'},
                            declaracao_racial: { type: 'string' },
                            filiacao_pai: { type: 'string' },
                            filiacao_mae: { type: 'string' },
                            endereco_familiar: { type: 'string' },
                            telefone: { type: 'string' },
                            whatsapp: { type: 'string' },
                            escolaridade_acolhido: { type: 'string' },
                            profissao_acolhido: { type: 'string' },
                            estado_civil_acolhido: { type: 'string' },
                            apoio_familiar: { type: 'boolean' },
                            nome_apoio: { type: 'string' },
                            endereco_apoio: { type: 'string' },
                            religiao_acolhido: { type: 'boolean' },
                            qual_religiao: { type: 'string' },
                            ativo: { type: 'boolean' },
                            filho: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        nome_filho: { type: 'string' },
                                        paga_pensao: { type: 'boolean' }
                                    }
                                }
                            },
                            saude: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        tratamento_psiquiatrico: { type: 'boolean' },
                                        local_tratamento: { type: 'string' },
                                        medicamento_psicotropico: { type: 'boolean' },
                                        descricao_psicotropico: { type: 'string' },
                                        medicamento_uso_continuo: { type: 'boolean' },
                                        descricao_uso_continuo: { type: 'string' },
                                        lesao_fisica: { type: 'boolean' },
                                        local_lesao_fisica: { type: 'string' },
                                        doenca_respiratoria: { type: 'boolean' },
                                        nome_doenca_respiratoria: { type: 'string' },
                                        alergia_alimentar: { type: 'boolean' },
                                        nome_alimento: { type:'string' },
                                        alergia_medicamentos: { type: 'boolean' },
                                        nome_alergia_medicamento: { type: 'string' },
                                        alguma_doenca: { type: 'boolean' },
                                        nome_doenca: { type: 'string' },
                                        problema_coracao: { type: 'boolean' },
                                        doenca_coracao: { type: 'string' },
                                        tem_cancer: { type: 'boolean' },
                                        historico_cancer: { type: 'string' },
                                        tipo_cancer: { type: 'string' },
                                        tentativa_suicidio: { type: 'boolean' },
                                        automutilacao: { type: 'boolean' }  
                                    }
                                }
                            },
                            vidajuridica: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        historico_prisao: { type: 'boolean' },
                                        motivo_prisao: { type: 'string' },
                                        processos: { type: 'boolean' },
                                        localidade_processo: { type: 'string' },
                                        uso_tornozeleira: { type: 'boolean' },
                                        informou_central: { type: 'boolean' },
                                        situacao_legal: { type: 'boolean' },
                                        motivo_situacao_ilegal: { type: 'string' },
                                        cumpriu_pena: { type: 'boolean' }
                                    }
                                }
                            },
                            substancia: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        uso_alcool: { type: 'boolean' },
                                        motivo_alcool: { type: 'string' },
                                        uso_tabaco: { type: 'boolean' },
                                        motivo_tabaco: { type: 'string' },
                                        outras_substancias: { type: 'boolean' },
                                        principal_substancia: { type: 'string' },
                                        motivo_outras_substancias: { type: 'string' }
                                    }
                                }
                            },
                            social: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        situacao_rua: { type: 'boolean' },
                                        motivos_rua: { type: 'string' },
                                        outros_centros: { type: 'boolean' },
                                        nome_outros_centros: { type: 'string' },
                                        motivo_saida_outros_centros: { type: 'string' },
                                        chegada_missao_vida: { 'type': 'string' },
                                        igreja: { 'type': 'string' },
                                        secretaria_governamental: { 'type': 'string' },
                                        sentimentos: { type: 'string' },
                                        objetivos: { type: 'string' }
                                    }
                                }
                            },
                            termoguarda: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        autorizacao_guarda: { type: 'boolean' },
                                        documentos_guardados: { type: 'string' },
                                        descricao_carteira: { type: 'string' },
                                        recurso_especie: { type: 'number' },
                                        aparelho_celular: { type: 'string' },
                                        outros_objetos: { type: 'string' }
                                    }
                                }
                            }
                        }
                },
                404: {
                    description: 'Acolhido não encontrado',
                    type: 'object',
                    properties: {
                        message: { type: 'string' }
                    }
                },
                400: {
                    description: 'Erro ao obter acolhido',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        preHandler: [fastify.authenticate],
        handler: acolhidoController.getAcolhidoById
    });
}


module.exports = acolhidoRoutes;