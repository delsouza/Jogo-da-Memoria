# Jogo-da-Memoria-One-Piece

Este é u jogo da memória baseado na série de anime "One Piece". O objetivo do jogo é encontrar todos os pares de personagens da série dentro de um tempo determinado.

## Instruções

    Clique em dois cartões para revelar a imagem do personagem.
    Se os personagens forem iguais, eles serão destacados e não poderão ser clicados novamente.
    Se os personagens não forem iguais, eles serão escondidos novamente após um curto período de tempo.
    O jogo termina quando todos os pares são encontrados.

## Variáveis

    grid: guarda a referência à div com a classe grid, que é a grade onde os cartões são exibidos.
    span: guarda a referência à div com a classe jogador, que exibe o nome do jogador.
    tempo: guarda a referência à div com a classe tempo, que exibe o tempo decorrido desde o início do jogo.
    personagens: é um array com o nome dos personagens da série.
    primeirocard: guarda a referência ao primeiro cartão clicado pelo jogador.
    segundocard: guarda a referência ao segundo cartão clicado pelo jogador.

## Funções

    createElement: cria um elemento HTML com a tag e classe especificadas.
    checkFimJogo: verifica se todos os pares já foram encontrados, encerrando o jogo e exibindo uma mensagem de parabéns se isso ocorrer.
    checkCartas: verifica se os personagens de dois cartões são iguais. Se sim, eles são destacados. Se não, são escondidos novamente.
    revelarcard: é acionado ao clicar em um cartão e adiciona a classe revelarcard para revelá-lo.
    criarCard: cria um cartão com uma imagem de fundo que corresponde ao personagem especificado.
    carregarJogo: cria e exibe todos os cartões do jogo.
    startTimer: inicia a contagem de tempo a partir do momento em que a página é carregada
    
## Evento
    
    O evento de clique é adicionado a cada cartão, chamando a função "revelarcard", que revela o personagem na frente da carta. Se a primeira carta a ser clicada, ela é armazenada na variável "primeirocard". Se for a segunda carta clicada, ela é armazenada na variável "segundocard". Então a função "checkCartas" é chamada para verificar se as duas cartas têm o mesmo personagem. Se sim, elas são marcadas como "carddesativado" e as variáveis "primeirocard" e "segundocard" são redefinidas como vazias. Se não, as cartas são fechadas novamente.
    
## Fim de jogo

A função "checkFimJogo" é chamada após cada jogada para verificar se todas as cartas foram desativadas, o que indica o fim do jogo. Se sim, o intervalo de tempo é interrompido e um alerta é exibido para o usuário, informando o nome do jogador e o tempo de jogo.
