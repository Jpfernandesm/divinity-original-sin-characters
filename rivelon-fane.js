// Ficha de Personagem - Divinity II - Original Sin
// contato: chaosjpmendes@gmail.com

// Ficha de Personagem - Fane 

class Personagem {
  #nome;
  #portrait;
  #quote;
  #gender;
  #race;
  #occupation;
  #localization;
  #relatedquests;
  #talents;
  #voiceactor;
  #racialskill;
  

} 

constructor(nome,
  portrait,
  quote,
  gender,
  race,
  occupation,
  localization,
  relatedquests,
  talents,
  voiceactor,
  racialskill);
  {  
    this.#nome = nome;
    this.#portrait = portrait;
    this.#quote = quote;
    this.#race = race;
    this.#occupation = occupation;
    this.#localization = localization;
    this.#relatedquests = relatedquests;
    this.#talents = talents;
    this.#voiceactor = voiceactor;
    this.#racialskill = racialskill;
  }

// penso em criar mais de um card de personagens e pensar em um botão tipo "gerar personagem do baralho" (digamos que tenha 5 personagens com seus wikis registrados e aí temos um botão numa landing page que puxa algum desses.)

  
