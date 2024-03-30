# laudia-copiloto-radiologia

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LaudIA - O Copiloto dos Radiologistas Eficientes</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css">
    <style>
        :root {
            --primary-color: #6f42c1;
            --secondary-color: #007bff;
        }
        body {
            background-color: #f8f9fa;
        }
        .jumbotron {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 100px 25px;
        }
        .features, .testimonials, .pricing, .contact {
            padding: 50px 0;
        }
        .feature-box, .testimonial-box, .price-box {
            text-align: center;
            padding: 5%;
        }
        .icon {
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        .testimonial-img {
            width: 10%;
            border-radius: 100%;
            margin: 20px;
        }
        .carousel-control-prev, .carousel-control-next {
            width: 5%;
        }
        .price-box {
            padding: 3% 2%;
        }
        .price-box h3 {
            font-size: 1.5rem;
        }
        .price-box h2 {
            font-size: 3rem;
            margin-bottom: 20px;
        }
        .contact-form {
            width: 50%;
        }
        @media (max-width: 1028px) {
            .contact-form {
                width: 100%;
            }
        }
        footer {
            padding: 50px 0;
            background-color: #f8f9fa;
        }
        .footer-link {
            color: #6c757d;
            text-decoration: none;
        }
        .footer-link:hover {
            color: var(--primary-color);
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: var(--primary-color);">
        <div class="container">
            <a class="navbar-brand" href="#">LaudIA</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#inicio">Início</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#recursos">Recursos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#precos">Preços</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contato">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="jumbotron text-center" id="inicio">
        <h1 class="display-4">Revolucione a Radiologia com IA</h1>
        <p class="lead">LaudIA é o seu copiloto de IA para relatórios radiológicos. Experimente uma eficiência e precisão incomparáveis.</p>
        <a href="inserir_exame.html" class="btn btn-light btn-lg">Começar Agora</a>
    </div>

    <section class="features" id="recursos">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 feature-box">
                    <i class="icon fas fa-brain fa-4x"></i>
                    <h3>Análise Alimentada por IA</h3>
                    <p>Aproveite o poder da inteligência artificial para analisar exames radiológicos e gerar relatórios precisos.</p>
                </div>
                <div class="col-lg-4 feature-box">
                    <i class="icon fas fa-tachometer-alt fa-4x"></i>
                    <h3>Aumento da Eficiência</h3>
                    <p>Agilize seu fluxo de trabalho radiológico e economize tempo valioso com os relatórios automatizados do laudIA.</p>
                </div>
                <div class="col-lg-4 feature-box">
                    <i class="icon fas fa-user-md fa-4x"></i>
                    <h3>Assistência Especializada</h3>
                    <p>Beneficie-se da experiência de nossos modelos de IA, treinados com grandes quantidades de dados radiológicos.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials">
        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <h2 class="testimonial-text">"O laudIA revolucionou nosso departamento de radiologia. Os relatórios alimentados por IA são incrivelmente precisos e eficientes, nos poupando incontáveis horas de trabalho."</h2>
                    <img class="testimonial-img" src="img/joao_silva.jpg" alt="Dr. João Silva">
                    <em>Dr. João Silva, Radiologista</em>
                </div>
                <div class="carousel-item">
                    <h2 class="testimonial-text">"Como radiologista, eu era cético sobre a IA no início, mas o laudIA me conquistou. É como ter um copiloto altamente qualificado ao meu lado, aumentando minha produtividade e precisão."</h2>
                    <img class="testimonial-img" src="img/maria_santos.jpg" alt="Dra. Maria Santos">
                    <em>Dra. Maria Santos, Radiologista</em>
                </div>
                <div class="carousel-item">
                    <h2 class="testimonial-text">"O laudIA é uma ferramenta indispensável em nossa clínica. Seu desempenho excepcional e interface intuitiva tornaram-no uma parte integral de nossa rotina diária."</h2>
                    <img class="testimonial-img" src="img/pedro_souza.jpg" alt="Dr. Pedro Souza">
                    <em>Dr. Pedro Souza, Radiologista</em>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
            </button>
        </div>
    </section>

    <section class="pricing" id="precos">
        <h2 class="text-center mb-5">Planos de Preços</h2>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 price-box">
                    <div class="card">
                        <div class="card-header">
                            <h3>Básico</h3>
                        </div>
                        <div class="card-body">
                            <h2>R$299<small class="text-muted">/mês</small></h2>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>10 exames por mês</li>
                                <li>Análise básica de IA</li>
                                <li>Suporte por e-mail</li>
                            </ul>
                            <button type="button" class="btn btn-outline-primary">Assinar</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 price-box">
                    <div class="card">
                        <div class="card-header">
                            <h3>Pro</h3>
                        </div>
                        <div class="card-body">
                            <h2>R$599<small class="text-muted">/mês</small></h2>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>50 exames por mês</li>
                                <li>Análise avançada de IA</li>
                                <li>Suporte prioritário por e-mail</li>
                            </ul>
                            <button type="button" class="btn btn-primary">Assinar</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 price-box">
                    <div class="card">
                        <div class="card-header">
                            <h3>Empresarial</h3>
                        </div>
                        <div class="card-body">
                            <h2>Personalizado</h2>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Exames ilimitados</li>
                                <li>Modelos dedicados de IA</li>
                                <li>Suporte premium</li>
                            </ul>
                            <button type="button" class="btn btn-outline-primary">Entre em Contato</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="contact" id="contato">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h2>Entre em Contato</h2>
                    <form class="contact-form">
                        <div class="mb-3">
                            <label for="nome" class="form-label">Nome:</label>
                            <input type="text" class="form-control" id="nome" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">E-mail:</label>
                            <input type="email" class="form-control" id="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="mensagem" class="form-label">Mensagem:</label>
                            <textarea class="form-control" id="mensagem" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar Mensagem</button>
                    </form>
                </div>
                <div class="col-lg-6 mt-5 mt-lg-0">
                    <p>LaudIA é uma solução de relatórios radiológicos alimentada por IA que aumenta a eficiência e a precisão para radiologistas.</p>
                    <ul class="list-unstyled">
                        <li><i class="fas fa-map-marker-alt"></i> Av. Paulista, 1000, São Paulo - SP</li>
                        <li><i class="fas fa-phone"></i> +55 11 9999-9999</li>
                        <li><i class="fas fa-envelope"></i> contato@laudia.com.br</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <h5>Links</h5>
                    <ul class="list-unstyled mb-0">
                        <li>
                            <a href="#inicio" class="footer-link">Início</a>
                        </li>
                        <li>
                            <a href="#recursos" class="footer-link">Recursos</a>
                        </li>
                        <li>
                            <a href="#precos" class="footer-link">Preços</a>
                        </li>
                        <li>
                            <a href="#contato" class="footer-link">Contato</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6">
                    <h5>Entre em Contato</h5>
                    <ul class="list-unstyled mb-0">
                        <li>
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:contato@laudia.com.br" class="footer-link">contato@laudia.com.br</a>
                        </li>
                        <li>
                            <i class="fas fa-phone"></i>
                            <a href="tel:+5511999999999" class="footer-link">+55 11 9999-9999</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="text-center">
                <p>&copy; 2023 LaudIA. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/yourkitid.js" crossorigin="anonymous"></script>
</body>
</html>

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/laudia-copiloto-radiologia.git
cd laudia-copiloto-radiologia
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
