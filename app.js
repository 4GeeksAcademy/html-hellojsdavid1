let pronoun = ['the', 'our', 'my','your', 'their', 'hers'];
let adj = ['great', 'big', 'small', 'tall', 'bad','speedy' ];
let noun = ['jogger', 'racoon', 'elephant', 'dog', 'tigger', 'bear'];


for(let i = 0; i < pronoun.length; i++){
    for(let j = 0; j < adj.length; j++){
        for(let k = 0; k < noun.length; k++){
            console.log(pronoun[i]+adj[j]+noun[k]+ '.com');
        
        }

    }
}
