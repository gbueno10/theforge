export const TOPICS = [
  { id: 'romance', icon: '♥', name: 'Romance' },
  { id: 'chemistry', icon: 'ϟ', name: 'Chemistry' },
  { id: 'stories', icon: '▣', name: 'Stories' },
  { id: 'dreams', icon: '☾', name: 'Dreams' },
  { id: 'fun', icon: '✦', name: 'Fun' },
  { id: 'spicy', icon: '▲', name: 'Spicy', optional: true },
];

export const CARD_TYPES = {
  question: 'Question',
  choice: 'Choose one',
  challenge: 'Challenge',
};

export const CARDS = [
  // Romance — light
  { id: 'romance-001', topic: 'romance', intensity: 'light', type: 'question', text: 'What small detail can make a date feel instantly special to you?' },
  { id: 'romance-002', topic: 'romance', intensity: 'light', type: 'question', text: 'What fictional couple do you secretly root for?' },
  { id: 'romance-003', topic: 'romance', intensity: 'light', type: 'question', text: 'What is your favorite kind of compliment to receive?' },
  { id: 'romance-004', topic: 'romance', intensity: 'light', type: 'question', text: 'Which song belongs on the soundtrack of a great first date?' },
  { id: 'romance-005', topic: 'romance', intensity: 'light', type: 'choice', text: 'Choose one: a carefully planned date or a completely spontaneous one?' },
  // Romance — personal
  { id: 'romance-006', topic: 'romance', intensity: 'personal', type: 'question', text: 'What makes you realize you are starting to like someone?' },
  { id: 'romance-007', topic: 'romance', intensity: 'personal', type: 'question', text: 'What gesture makes you feel genuinely chosen?' },
  { id: 'romance-008', topic: 'romance', intensity: 'personal', type: 'question', text: 'How do you naturally show affection when you care about someone?' },
  { id: 'romance-009', topic: 'romance', intensity: 'personal', type: 'question', text: 'What green flag makes you want to know someone better?' },
  { id: 'romance-010', topic: 'romance', intensity: 'personal', type: 'challenge', text: 'Tell each other one quality you have already noticed and genuinely admire.' },
  // Romance — deep
  { id: 'romance-011', topic: 'romance', intensity: 'deep', type: 'question', text: 'What does being loved well look like in everyday life?' },
  { id: 'romance-012', topic: 'romance', intensity: 'deep', type: 'question', text: 'What part of yourself takes the longest to reveal in a relationship?' },
  { id: 'romance-013', topic: 'romance', intensity: 'deep', type: 'question', text: 'What kind of partnership would make your life feel bigger, not smaller?' },
  { id: 'romance-014', topic: 'romance', intensity: 'deep', type: 'question', text: 'What have past relationships taught you about what you truly need?' },
  { id: 'romance-015', topic: 'romance', intensity: 'deep', type: 'challenge', text: 'Describe a future ordinary Sunday that would feel deeply romantic to you.' },

  // Chemistry — light
  { id: 'chemistry-001', topic: 'chemistry', intensity: 'light', type: 'question', text: 'What is the first little detail you tend to notice about someone?' },
  { id: 'chemistry-002', topic: 'chemistry', intensity: 'light', type: 'question', text: 'What kind of humor wins you over fastest?' },
  { id: 'chemistry-003', topic: 'chemistry', intensity: 'light', type: 'question', text: 'What makes a conversation immediately feel easy?' },
  { id: 'chemistry-004', topic: 'chemistry', intensity: 'light', type: 'question', text: 'Is confidence, curiosity, or kindness most magnetic to you at first?' },
  { id: 'chemistry-005', topic: 'chemistry', intensity: 'light', type: 'choice', text: 'Choose one: instant sparks or a slow-burn connection?' },
  // Chemistry — personal
  { id: 'chemistry-006', topic: 'chemistry', intensity: 'personal', type: 'question', text: 'When do you feel most attractive without trying?' },
  { id: 'chemistry-007', topic: 'chemistry', intensity: 'personal', type: 'question', text: 'What creates tension in a conversation in the best possible way?' },
  { id: 'chemistry-008', topic: 'chemistry', intensity: 'personal', type: 'question', text: 'What kind of eye contact feels exciting rather than awkward?' },
  { id: 'chemistry-009', topic: 'chemistry', intensity: 'personal', type: 'question', text: 'What personality trait becomes more attractive the longer you notice it?' },
  { id: 'chemistry-010', topic: 'chemistry', intensity: 'personal', type: 'challenge', text: 'Hold eye contact for five seconds, then each say what you noticed.' },
  // Chemistry — deep
  { id: 'chemistry-011', topic: 'chemistry', intensity: 'deep', type: 'question', text: 'What makes attraction grow into emotional intimacy for you?' },
  { id: 'chemistry-012', topic: 'chemistry', intensity: 'deep', type: 'question', text: 'What makes it safe for you to fully relax around someone?' },
  { id: 'chemistry-013', topic: 'chemistry', intensity: 'deep', type: 'question', text: 'What kind of vulnerability makes you feel closer to a person?' },
  { id: 'chemistry-014', topic: 'chemistry', intensity: 'deep', type: 'question', text: 'How can someone tell when you want them to come a little closer?' },
  { id: 'chemistry-015', topic: 'chemistry', intensity: 'deep', type: 'choice', text: 'Choose one: feeling completely understood or feeling endlessly intrigued?' },

  // Stories — light
  { id: 'stories-001', topic: 'stories', intensity: 'light', type: 'question', text: 'What harmless mistake still makes you laugh when you remember it?' },
  { id: 'stories-002', topic: 'stories', intensity: 'light', type: 'question', text: 'What is the most unexpectedly fun night you have ever had?' },
  { id: 'stories-003', topic: 'stories', intensity: 'light', type: 'question', text: 'Which childhood obsession would surprise people who know you now?' },
  { id: 'stories-004', topic: 'stories', intensity: 'light', type: 'question', text: 'What trip gave you a story you always enjoy telling?' },
  { id: 'stories-005', topic: 'stories', intensity: 'light', type: 'challenge', text: 'Tell a two-minute story that begins with: “I really thought this would work.”' },
  // Stories — personal
  { id: 'stories-006', topic: 'stories', intensity: 'personal', type: 'question', text: 'What unexpected encounter changed something in you?' },
  { id: 'stories-007', topic: 'stories', intensity: 'personal', type: 'question', text: 'When have you felt especially proud of how you handled a difficult moment?' },
  { id: 'stories-008', topic: 'stories', intensity: 'personal', type: 'question', text: 'Who believed in you before you fully believed in yourself?' },
  { id: 'stories-009', topic: 'stories', intensity: 'personal', type: 'question', text: 'What memory instantly brings back a specific smell, sound, or feeling?' },
  { id: 'stories-010', topic: 'stories', intensity: 'personal', type: 'choice', text: 'Choose one story to tell: your luckiest break or your best recovery from a disaster.' },
  // Stories — deep
  { id: 'stories-011', topic: 'stories', intensity: 'deep', type: 'question', text: 'What chapter of your life changed you more than people realize?' },
  { id: 'stories-012', topic: 'stories', intensity: 'deep', type: 'question', text: 'What belief about yourself did you have to unlearn?' },
  { id: 'stories-013', topic: 'stories', intensity: 'deep', type: 'question', text: 'When did you choose a path that other people did not understand?' },
  { id: 'stories-014', topic: 'stories', intensity: 'deep', type: 'question', text: 'What experience made you softer, stronger, or both?' },
  { id: 'stories-015', topic: 'stories', intensity: 'deep', type: 'challenge', text: 'Tell the story of a moment that quietly shaped who you are today.' },

  // Dreams — light
  { id: 'dreams-001', topic: 'dreams', intensity: 'light', type: 'question', text: 'If you could wake up anywhere tomorrow, where would it be?' },
  { id: 'dreams-002', topic: 'dreams', intensity: 'light', type: 'question', text: 'What skill would you love to become surprisingly good at?' },
  { id: 'dreams-003', topic: 'dreams', intensity: 'light', type: 'question', text: 'What would your ideal completely free afternoon look like?' },
  { id: 'dreams-004', topic: 'dreams', intensity: 'light', type: 'question', text: 'What place is currently highest on your travel wish list?' },
  { id: 'dreams-005', topic: 'dreams', intensity: 'light', type: 'choice', text: 'Choose one: a year of travel or a year to build your dream project?' },
  // Dreams — personal
  { id: 'dreams-006', topic: 'dreams', intensity: 'personal', type: 'question', text: 'What version of your life would you still love to experience?' },
  { id: 'dreams-007', topic: 'dreams', intensity: 'personal', type: 'question', text: 'What dream keeps returning even when you get busy?' },
  { id: 'dreams-008', topic: 'dreams', intensity: 'personal', type: 'question', text: 'What would you try if you knew you could be bad at it for a while?' },
  { id: 'dreams-009', topic: 'dreams', intensity: 'personal', type: 'question', text: 'What kind of home or community do you hope to create someday?' },
  { id: 'dreams-010', topic: 'dreams', intensity: 'personal', type: 'challenge', text: 'Describe one dream in enough detail that the other person can picture it.' },
  // Dreams — deep
  { id: 'dreams-011', topic: 'dreams', intensity: 'deep', type: 'question', text: 'What would a life that feels truly yours look like?' },
  { id: 'dreams-012', topic: 'dreams', intensity: 'deep', type: 'question', text: 'What are you unwilling to sacrifice, even for a major ambition?' },
  { id: 'dreams-013', topic: 'dreams', intensity: 'deep', type: 'question', text: 'What fear has the most influence over the future you imagine?' },
  { id: 'dreams-014', topic: 'dreams', intensity: 'deep', type: 'question', text: 'Who do you hope benefits from the life you build?' },
  { id: 'dreams-015', topic: 'dreams', intensity: 'deep', type: 'choice', text: 'Choose one: a peaceful life with deep roots or an unpredictable life full of reinvention?' },

  // Fun — light
  { id: 'fun-001', topic: 'fun', intensity: 'light', type: 'question', text: 'If this date were a video game level, what would our mission be?' },
  { id: 'fun-002', topic: 'fun', intensity: 'light', type: 'question', text: 'What ridiculous competition are you confident you could win?' },
  { id: 'fun-003', topic: 'fun', intensity: 'light', type: 'question', text: 'Which three snacks would you choose for a late-night adventure?' },
  { id: 'fun-004', topic: 'fun', intensity: 'light', type: 'question', text: 'What is your most defensible unpopular opinion about food?' },
  { id: 'fun-005', topic: 'fun', intensity: 'light', type: 'choice', text: 'Choose one: karaoke with strangers or dancing where nobody else is dancing?' },
  // Fun — personal
  { id: 'fun-006', topic: 'fun', intensity: 'personal', type: 'question', text: 'What brings out your most playful side?' },
  { id: 'fun-007', topic: 'fun', intensity: 'personal', type: 'question', text: 'What is something childish you hope you never outgrow?' },
  { id: 'fun-008', topic: 'fun', intensity: 'personal', type: 'question', text: 'Which friend could talk you into almost any harmless adventure?' },
  { id: 'fun-009', topic: 'fun', intensity: 'personal', type: 'question', text: 'What kind of chaos is genuinely fun for you, and what kind is not?' },
  { id: 'fun-010', topic: 'fun', intensity: 'personal', type: 'challenge', text: 'Invent a terrible movie title for this date and describe its plot.' },
  // Fun — deep
  { id: 'fun-011', topic: 'fun', intensity: 'deep', type: 'question', text: 'When do you feel most free to be weird without editing yourself?' },
  { id: 'fun-012', topic: 'fun', intensity: 'deep', type: 'question', text: 'What part of adulthood do you refuse to take too seriously?' },
  { id: 'fun-013', topic: 'fun', intensity: 'deep', type: 'question', text: 'Who makes you laugh in a way that feels like coming home?' },
  { id: 'fun-014', topic: 'fun', intensity: 'deep', type: 'question', text: 'What does playfulness add to a strong relationship?' },
  { id: 'fun-015', topic: 'fun', intensity: 'deep', type: 'challenge', text: 'Each invent a tiny tradition you would want to share with someone you love.' },

  // Spicy — light
  { id: 'spicy-001', topic: 'spicy', intensity: 'light', type: 'question', text: 'What kind of flirting do you find impossible not to notice?' },
  { id: 'spicy-002', topic: 'spicy', intensity: 'light', type: 'question', text: 'What outfit makes you feel especially confident?' },
  { id: 'spicy-003', topic: 'spicy', intensity: 'light', type: 'question', text: 'What is more attractive: a great voice, a great smile, or great eye contact?' },
  { id: 'spicy-004', topic: 'spicy', intensity: 'light', type: 'question', text: 'What kind of compliment feels a little dangerous in a good way?' },
  { id: 'spicy-005', topic: 'spicy', intensity: 'light', type: 'choice', text: 'Choose one: subtle teasing or direct flirting?' },
  // Spicy — personal
  { id: 'spicy-006', topic: 'spicy', intensity: 'personal', type: 'question', text: 'What makes physical chemistry feel natural rather than forced?' },
  { id: 'spicy-007', topic: 'spicy', intensity: 'personal', type: 'question', text: 'How do you like someone to show that they are attracted to you?' },
  { id: 'spicy-008', topic: 'spicy', intensity: 'personal', type: 'question', text: 'What creates anticipation for you?' },
  { id: 'spicy-009', topic: 'spicy', intensity: 'personal', type: 'question', text: 'What boundary or check-in helps attraction feel safer and better?' },
  { id: 'spicy-010', topic: 'spicy', intensity: 'personal', type: 'challenge', text: 'Give each other a sincere compliment that is a little bolder than the last one.' },
  // Spicy — deep
  { id: 'spicy-011', topic: 'spicy', intensity: 'deep', type: 'question', text: 'What helps you talk honestly about desire without embarrassment?' },
  { id: 'spicy-012', topic: 'spicy', intensity: 'deep', type: 'question', text: 'What makes intimacy feel emotionally meaningful to you?' },
  { id: 'spicy-013', topic: 'spicy', intensity: 'deep', type: 'question', text: 'How do trust and attraction affect each other for you?' },
  { id: 'spicy-014', topic: 'spicy', intensity: 'deep', type: 'question', text: 'What do you wish people understood better about consent and chemistry?' },
  { id: 'spicy-015', topic: 'spicy', intensity: 'deep', type: 'choice', text: 'Choose one: being desired intensely or being understood intimately?' },
];
