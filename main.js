// 170 Daily Affirmations
var affirmations = [
    'I am kind.',
    'I am powerful.',
    'I am worthy.',
    'I am still worthy.',
    'I am not my mistakes.',
    'I am proud of myself.',
    'I am blessed.',
    'I am a blessing to others.',
    'I am beautiful.',
    'I am a visionary',
    'I am enough.',
    'I am a unique and beautiful soul.',
    'I am a valuable person.',
    'I let go of negative experiences.',
    'I am grounded, peaceful and centered.',
    'I am worthy of infinite compassion.',
    'I am bigger than my fears.',
    'It\'s okay not to be okay.',
    'I deserve love.',
    'I am deserving of everything good that comes to me.',
    'I am in charge of how I feel.',
    'Today, I am choosing happiness.',
    'Everything attached to me wins.',
    'It\'s my winning season.',
    'It is okay for things to go well, I accept peace and release anxiety.',
    'Everything that I desire is on its way to me.',
    'I am becoming the best version of myself.',
    'I am in control over my thoughts, spirit, and the positivity within me will resonate into every interaction I have.',
    'I am at home in my body.',
    'My life is a gift. I will use this gift with confidence, joy and exuberance.',
    'Today, I choose me.',
    'I feel profound empathy and love for others and their own unique paths.',
    'I choose to stop agonising for being me.',
    'I am at peace with all that has happened in my life.',
    'My life is filled with joy and abundance.',
    'Happiness flows from me.',
    'I am willing to keep going, even when things get tough, to achieve the success I deserve.',
    'My body is beautiful and expresses my spirit.',
    'I respect my limitations and am thankful for the things I am able to accomplish.',
    'My life is full of happiness and love.',
    'I am empowered to create change in my life.',
    'I follow my own expectations, not the expectations of others.',
    'I overflow with creativity and brilliant ideas.',
    'I don’t judge myself or others.',
    'Jesus did not die on the cross for me to be mediocre.',
    'I will excel.',
    'I am not my negative thoughts or emotions.',
    'My inner beauty shines brightly.',
    'My confidence is soaring.',
    'I am increasing my prosperity every day.',
    'Anything is possible for me.',
    'What I see with my heart, I will see with my eyes.',
    'Not everything that weighs me down is mine to carry.',
    'As long as I know who I am and what makes me happy, it doesn’t matter how others see me.',
    'I honour my commitments to myself.',
    'Happiness is a choice.',
    'I nurture myself so that I can nurture others.',
    'I am allowed to take up space.',
    'My past is not a reflection of my future.',
    'I am smart enough to make my own decisions.',
    'I am in control of how I react to others.',
    'I choose peace.',
    'I am courageous and stand up for myself.',
    'I will succeed today.',
    'I deserve to have joy in my life.',
    'I am worthy of love.',
    'I approve of myself and love myself deeply.',
    'My body is healthy, and I’m grateful.',
    'I am more at ease every day.',
    'I am calm, happy and content.',
    'My life is a gift and I appreciate everything I have.',
    'I choose to surround myself with positive people who will help bring out the best in me.',
    'I do not need someone else to feel happiness.',
    'I am allowed to take the time to heal.',
    'My imperfections make me unique.',
    'I am allowed to make mistakes; they don’t make up my whole story.',
    'My potential to succeed is limitless.',
    'Difficult times are part of my journey and allow me to appreciate the good.',
    'I forgive those who have hurt me.',
    'I forgive myself for hurting others.',
    'I am in charge of my life and no one will dictate my path besides me.',
    'I am doing my best and that is enough.',
    'I have the power to create change.',
    'I know exactly what to do to achieve success.',
    'I choose to be proud of myself and the things I choose to do.',
    'I will not compare myself to strangers on the internet.',
    'I let go of all that no longer serves me.',
    'I love myself fully, including the way I look.',
    'My life becomes richer as I get older.',
    'I can absolutely do anything I put my mind to.',
    'I am worthy of respect and acceptance.',
    'My contributions to the world are valuable.',
    'My wants and needs are important.',
    'I make a significant differnce to the lives of the people around me.',
    'I am blessed with amazing family and friends.',
    'I attract money easily into my life.',
    'My life is full of amazing opportunities that are ready for me to step into.',
    'I am free to create the life I desire.',
    'I am open to new adventures in my life.',
    'I am bold, beautiful and brilliant.',
    'My body shape is perfect in the way it is intended to be.',
    'When I allow my light to shine, I unconsciously give other people permission to do the same.',
    'No amount of guilt can change the past, and no amount of worrying can change the future.',
    'To make small steps towards big goals is progress.',
    'Negative thoughts only have the power that I allow them to have.',
    'I can choose to turn a curse into a blessing.',
    'I create a safe and secure space for myself wherever I am.',
    'I give myself permission to do what is right for me.',
    'I am confident in my ability to achieve my goals.',
    'I use my time and talents to be a blessing to others.',
    'I give myself the space to grow and learn.',
    'I allow myself to be who I am without judgement.',
    'I listen to my intuition and trust my inner guide.',
    'I accept my emotions and let them serve their purpose.',
    'I give myself the care and attention that I deserve.',
    'My drive and ambition allow me to achieve my goals.',
    'I am always headed in the right direction.',
    'I trust that I am on the right path.',
    'I am creatively inspired by the world around me.',
    'My mind is full of brilliant ideas.',
    'I put my energy into things that matter to me.',
    'I am becoming closer to my true self every day.',
    'I am learning valuable lessons from myself every day.',
    'I am at peace with who I am as a person.',
    'I make a difference in the world by simply existing in it.',
    'I am the architect of my life; I build its foundation and choose its contents.',
    'Today, I am brimming with energy and overflowing with joy.',
    'My body is healthy; my mind is brilliant; my soul is tranquil.',
    'I am superior to negative thoughts and low actions.',
    'I forgive those who have harmed me in my past and peacefully detach from them.',
    'A river of compassion washes away my anger and replaces it with love.',
    'I possess the qualities needed to be extremely successful.',
    'My business is growing, expanding, and thriving.',
    'Creative energy surges through me and leads me to new and brilliant ideas.',
    'Happiness is a choice. I base my happiness on my own accomplishments and the blessings I have been given.',
    'My ability to conquer my challenges is limitless; my potential to succeed is infinite.',
    'I deserve to be employed and paid well for my time, efforts, and ideas. Each day, I am closer to finding the perfect job for me.',
    'My thoughts are filled with positivity and my life is plentiful with prosperity.',
    'Today, I abandon my old habits and take up new, more positive ones.',
    'I choose to align my actions with my intentions.',
    'Many people look up to me and recognise my worth; I am admired.',
    'I acknowledge my own self-worth; my confidence is soaring.',
    'Everything that is happening now is happening for my ultimate good.',
    'I am a powerhouse; I am indestructible.',
    'Though times may be difficult, they are only a short phase of life.',
    'My future is an ideal projection of what I envision now.',
    'My efforts are being supported by the universe; my dreams manifest into reality before my eyes.',
    'The perfect partner for me is coming into my life sooner than I expect.',
    'I radiate charm, beauty and grace.',
    'My obstacles are moving out of my way; my path is carved towards greatness.',
    'I wake up today with strength in my heart and clarity in my mind.',
    'My fears of tomorrow are simply melting away.',
    'I am at peace with all that has happened, is happening, and will happen.',
    'My nature is Divine; I am a spiritual being.',
    'My life is just beginning.',
    'I deserve to live a life of abundance.',
    'I am blessed to be a blessing.',
    'I am guided in my every step by the Holy Spirit, who leads me towards what I must know and do.',
    'My relationships are becoming stronger and more stable with each passing day.',
    'I am grateful to have people in my life who inspire me to be better.',
    'I trust myself to make the right decision.',
    'I am brave.',
    'I am courageous and I stand up for myself.',
    'I trust in divine timing; All things are working for my good.',
    'I am amazing.',
    'I am worthy of being wealthy.',
    'I am whole.',
    'I am generous.',
    'I am God\'s masterpiece.',
    'I am victorious.',
    'I attract what I truly desire.',
    'I am open and receptive to all the wealth that life throws at me.',
    'My body is getting stronger every day.',
    'My actions create wealth for me.',
    'I love taking great care of myself.',
    'I receive good health into my life.',
    'I am physically and emotionally balanced.',
    'I am wealthy right now.',
    'My life is full of abundance.',
    'I am living a life of abundance and prosperity.',
    'I am grateful for this present moment.',
    'I am, I can, I will.',
    'I know I am, therefore I can; I know I can, therefore I will.',
    'I have power over my thoughts.',
    'I am a work of art.',
    'I deserve this life.',
    'My life is a gift.',
    'I have a unique path.',
    'I inhale confidence and exhale fear.',
    'I wake with new energy and optimism.',
    'It is my duty to be me.',
    'I am at peace with my past.',
    'Compassion is my natural way of being.',
    'I inspire those around me.',
    'I feel wonderful and alive.',
    'I attract people who help me meet my goals.',
    'I am connected to the universe.',
    'All is well and good in my life.',
    'Peace begins in me.',
    'I appreciate and acknowledge all of me.',
    'I allow my true to flourish.',
    'I appreciate everything I have.',
    'Prosperity flows through me at all times.',
    'I am safe; divinely guided and protected.',
    'I speak with strong confidence.',
    'I feel full of life.',
    'I find freedom in my vulnerability.',
    'There is power within me.',
    'I am beautiful inside and out.',
    'I am humble and proud.',
    'I have integrity and my friends trust me.',
    'I am a powerful creator.',
    'The universe always provides for me.',
    'I am courageous and speak my truth.',
    'I am not alone.',
    'I am a child of God.',
    'I am fearfully and wonderfully made.',
]

window.onload = function () {
    // hide button outline on first click
    document.querySelector('button').style.outline = 'none';
}

// generate random quote each time the newQuoteButton is clicked
var newQuoteButton = document.querySelector('.new-quote');

function getQuote() {
    var randomQuote = affirmations[Math.floor(Math.random() * 218)];
    if ('newQuoteButton === true') {
        document.querySelector('.quote-text').textContent = randomQuote;
        document.querySelector('.quote-text').style.background = '#ffffff';
        document.querySelector('button').style.outline = 'none';
    }
}

// add event listener to new quote newQuoteButton
// get quote is the name of the function that will be invoked when the button is clicked
newQuoteButton.addEventListener('click', getQuote);

// button animation
newQuoteButton.onclick = function() {
    newQuoteButton.disabled = true;
    setTimeout(function() {
        newQuoteButton.disabled = false;
    }, 100);
}
