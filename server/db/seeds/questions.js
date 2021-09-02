
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(() => {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1, 
          question: 'Who owns Balto?', 
          possible_answers: '["Bren","Casey","Kafele","Kelly"]', 
          correct_answer: 'Casey'
        },
        {
          id: 2, 
          question: 'What is Freya\'s dog\'s name?', 
          possible_answers: '["Saiga", "Taiga", "Molly", "George"]', 
          correct_answer: 'Saiga'
        },
        {
          id: 3, 
          question: 'Which came first: the chicken or the egg?', 
          possible_answers: '["The chicken", "The dog", "The egg", "The Jury is still out"]', 
          correct_answer: 'The Jury is still out'
        },
        {
          id: 4, 
          question: 'What is Roa 2021\'s GitHub "Organisation" photo of?', 
          possible_answers: '["A Kiwi", "A Takahe", "A Fantail", "A Kaka"]', 
          correct_answer: 'A Kiwi'
        },
        {
          id: 5, 
          question: 'What does API stand for?', 
          possible_answers: '["Application Programming Interface", "Application Programming Interlace", "Associative Plugging Array", ""]', 
          correct_answer: 'Application Programming Interface'
        },
        {
          id: 6, 
          question: 'Which equality operator is the preference of Emily', 
          possible_answers: '["=", "==", "===", "===="]', 
          correct_answer: '==='
        },
        {
          id: 7, 
          question: 'Which of these drones is one of Bren\'s favourite?', 
          possible_answers: '["El Diablo Rojo", "Black Betty", "Mossy", "Rooster"]', 
          correct_answer: 'Black Betty'
        },
        {
          id: 8, 
          question: 'What licence does Kelly have?', 
          possible_answers: '["Restricted", "Suspended", "Learners", "Full licence"]', 
          correct_answer: 'Learners'
        },
        {
          id: 9, 
          question: 'What is Kafele\'s car called?', 
          possible_answers: '["Douglas", "Noah", "Lenny", "Karl"]', 
          correct_answer: 'Lenny'
        },
        {
          id: 10, 
          question: 'What does npm stand for', 
          possible_answers: '["Negativly Proportional Model", "Node Package Manager", "Nuclear Planning Manual", "It doesn\'t stand for anything"]', 
          correct_answer: 'It doesn\'t stand for anything'
        }
      ])
    })
}
