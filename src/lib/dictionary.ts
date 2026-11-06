import { FaqItem, PricingPlan, Testimonial } from '@/types';

export const BUSINESS_INFO = {
  name: 'Nayali Tamil Academy',
  taglineEn: 'Tamil Tuition Centre & Online Learning Hub',
  taglineTa: 'தமிழ் பயிற்சி மையம் மற்றும் இணையவழிக் கல்விக்கூடம்',
  address: 'Block-14, Dharga Rd, Zamin Pallavaram, Dargah Colony, Pallavaram, Chennai, Tamil Nadu 600043',
  landmarkEn: 'Near Pallavaram Dharga Road, Chennai - 600043',
  landmarkTa: 'தர்கா சாலை, ஜமீன் பல்லாவரம், சென்னை - 600043',
  phone: '+91 91761 07775',
  phoneRaw: '919176107775',
  rating: '5.0',
  reviewCount: 78,
  hoursWeekdayEn: 'Mon – Sat: 5:00 AM – 9:00 PM',
  hoursWeekdayTa: 'திங்கள் – சனி: காலை 5:00 – இரவு 9:00',
  hoursSundayEn: 'Sun: 10:00 AM – 9:00 PM',
  hoursSundayTa: 'ஞாயிறு: காலை 10:00 – இரவு 9:00',
  googleMapsUrl: 'https://maps.google.com/?q=Block-14,+Dharga+Rd,+Zamin+Pallavaram,+Pallavaram,+Chennai,+Tamil+Nadu+600043',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8926344262174!2d80.14494!3d12.97868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e243453715f%3A0x6b87627be9bdf932!2sDharga%20Rd%2C%20Pallavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600043!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin',
};

export const DICTIONARY = {
  en: {
    banner: {
      text: '✨ Preview Pitch Demo for Nayali Tamil Academy, Pallavaram • Designed by Pranavesh N',
      action: 'Book Free Demo',
      dismiss: 'Dismiss preview banner',
    },
    nav: {
      about: 'About',
      offers: 'What We Offer',
      path: 'Learning Path',
      audience: 'Who It\'s For',
      compare: 'Online vs Offline',
      teacher: 'Teacher',
      testimonials: 'Reviews',
      pricing: 'Plans',
      visit: 'Visit Us',
      faq: 'FAQ',
      demoCta: 'Join Free Demo',
      callNow: 'Call Us',
    },
    hero: {
      badge: '🌸 Women-Owned • Pallavaram & Global Online',
      titleHighlight: 'Learn Tamil',
      titleRest: 'the Easy, Joyful Way',
      tamilSubtitle: 'தமிழ் கற்போம், மகிழ்வோம்',
      description:
        'Personalized Tamil coaching for school students, adults, and overseas families. Master reading, neat handwriting, exam excellence, and fluent conversation through joyful, interactive lessons in Pallavaram or from anywhere in the world.',
      whatsappCta: 'Book a Free Demo Class',
      callCta: 'Call +91 91761 07775',
      trustBadge: 'Rated 5.0 on Google',
      reviewNote: 'from 78 verified student & parent reviews',
      featureBadges: [
        'Interactive 1-to-1 & Group Classes',
        'Offline in Pallavaram + Live Online Worldwide',
        'State Board, CBSE, ICSE & Spoken Tamil',
      ],
    },
    offers: {
      eyebrow: 'Everything You Need To Master Tamil',
      title: 'Thoughtfully Designed for Every Learner',
      subtitle:
        'We blend traditional Tamil pedagogy with modern interactive activities, storytelling, and structured worksheets to make language learning natural and fun.',
      items: [
        {
          id: 'interactive',
          title: 'Interactive Live Classes',
          description:
            'Engaging discussions, audio-visual pronunciation guides, and prompt individual attention to make every class lively.',
          badge: 'High Engagement',
        },
        {
          id: 'one-on-one',
          title: '1-to-1 & Small Group Batches',
          description:
            'Choose dedicated 1-on-1 coaching for accelerated progress, or collaborative small batches (max 4–6 students) for peer practice.',
          badge: 'Custom Pace',
        },
        {
          id: 'activity',
          title: 'Fun & Activity-Based Learning',
          description:
            'Memory games, word puzzles, flashcards, and tongue twisters that make complex grammar and spelling effortlessly stick.',
          badge: 'Zero Stress',
        },
        {
          id: 'storytelling',
          title: 'Storytelling & Cultural Rhymes',
          description:
            'Panchatantra, Tenali Raman, Thirukkural couplets, and classic Tamil folk stories that spark curiosity and conversational fluency.',
          badge: 'Cultural Roots',
        },
        {
          id: 'assessments',
          title: 'Weekly Progress Assessments',
          description:
            'Gentle, encouraging weekly reviews to track reading speed, letter recognition, and dictation accuracy without exam fear.',
          badge: 'Tracked Growth',
        },
        {
          id: 'worksheets',
          title: 'Custom Worksheets & Stroke Guides',
          description:
            'Printable Tamil letter tracing sheets, grammar workbooks, and vocabulary flashcards tailored to each learner’s school board or goals.',
          badge: 'Hands-on Practice',
        },
      ],
    },
    path: {
      eyebrow: 'Structured Progression',
      title: 'The 6-Step Nayali Learning Path',
      subtitle:
        'From recognizing your very first letter to speaking and writing with poise and cultural pride.',
      steps: [
        {
          step: '01',
          tamil: 'உயிர் & மெய் எழுத்துகள்',
          title: 'Letters & Phonetics',
          description:
            'Mastering the 12 Uyir, 18 Mei, and Ayutha Ezhuthu through sound association, proper stroke order, and letter tracing.',
          outcome: 'Flawless letter recognition and pure pronunciation.',
        },
        {
          step: '02',
          tamil: 'உயிர்மெய் & சொற்கள்',
          title: 'Letter Blends & Vocabulary',
          description:
            'Understanding how consonants combine with vowel signs (கொம்பு, கால், சுழி) to form 216 Uyirmei letters and everyday words.',
          outcome: 'Connecting letters easily into words.',
        },
        {
          step: '03',
          tamil: 'வாக்கிய அமைப்புகள்',
          title: 'Sentence Structures',
          description:
            'Simple grammar rules, gender agreement (திணை, பால், எண், இடம்), tenses, and building meaningful spoken and written sentences.',
          outcome: 'Forming original sentences with zero hesitation.',
        },
        {
          step: '04',
          tamil: 'பிழையற்ற வாசிப்பு',
          title: 'Fluent Reading & Pronunciation',
          description:
            'Reading storybooks, moral poetry, school textbook chapters, and newspaper snippets with rhythm, clarity, and correct intonation.',
          outcome: 'Speed and comprehension in school exams.',
        },
        {
          step: '05',
          tamil: 'அழகிய கையெழுத்துப் பயிற்சி',
          title: 'Neat Handwriting & Writing',
          description:
            'Fine motor penmanship drills, dictation practice, essay drafting, letter writing, and spelling mastery (ர/ற, ல/ள/ழ nuances).',
          outcome: 'High exam scores and legible, proud Tamil handwriting.',
        },
        {
          step: '06',
          tamil: 'சரளமாகப் பேசுதல்',
          title: 'Confident Spoken Tamil',
          description:
            'Conversational dialogues, speech preparation, cultural idioms, and storytelling that give learners natural expressive fluency.',
          outcome: 'Speaking Tamil proudly at home, school, and overseas.',
        },
      ],
    },
    audience: {
      eyebrow: 'Tailored Programs',
      title: 'Who is Nayali Tamil Academy For?',
      subtitle:
        'Whether preparing for school board exams or discovering your mother tongue from across the world, we have a specialized module for you.',
      tabs: {
        kids: 'Primary School Kids',
        teens: 'Teens & Board Exams',
        adults: 'Adult Beginners',
        overseas: 'Overseas & NRI Families',
      },
      content: {
        kids: {
          tag: 'Ages 4 – 11 • Foundational & School Help',
          title: 'Building a Strong, Joyful Foundation in Tamil',
          description:
            'Many children in English-medium schools struggle with Tamil letters and second-language exams. We turn struggle into joy through songs, drawing, stroke-by-stroke tracing, and patient guidance that builds genuine love for the language.',
          points: [
            'Perfect for CBSE, Samacheer Kalvi, and ICSE school syllabus',
            'Overcoming fear of reading aloud and weekly school dictations',
            'Activity sheets and fun rewards that keep young minds enthusiastic',
            'Friendly, motherly approach that puts young children at ease',
          ],
          cta: 'Enroll Your Child',
        },
        teens: {
          tag: 'Ages 12 – 18 • High School & Board Prep',
          title: 'Exam Mastery, Grammar Precision & Essay Writing',
          description:
            'Targeted coaching for 8th, 9th, and 10th-grade Tamil curriculum. We break down complex Ilakkanam (grammar), poetry analysis (Seyyul), comprehension, and formal letter drafting to help students convert a dreaded subject into a top-scoring subject.',
          points: [
            'Mastery over complex grammar (வேற்றுமை, புணர்ச்சி, இலக்கணக் குறிப்பு)',
            'Past paper solving and time management during board exams',
            'Vocabulary enrichment for structured essays (கட்டுரை) and letters',
            'Flexible evening and early morning slots before school hours',
          ],
          cta: 'Boost School Marks',
        },
        adults: {
          tag: 'All Ages • Working Professionals & Non-Tamils',
          title: 'Speak, Read & Understand Tamil with Confidence',
          description:
            'Relocated to Chennai for work? Or want to connect deeply with your spouse’s family or Tamil heritage? Our conversational adult courses focus on practical everyday dialogues, marketplace vocabulary, and essential signage reading with zero judgment.',
          points: [
            'Practical spoken Tamil for workplace, travel, and daily Chennai life',
            'Option to focus purely on conversation or include script reading',
            'Discreet 1-on-1 adult batches scheduled around work hours',
            'Patience and zero embarrassment for absolute beginners',
          ],
          cta: 'Start Learning as an Adult',
        },
        overseas: {
          tag: 'Global Tamilians • USA, UK, Singapore, Gulf, Australia',
          title: 'Connecting Overseas Children to Their Tamil Roots',
          description:
            'Living outside Tamil Nadu and worried your kids will lose touch with their native tongue? Our online global program bridges the gap with culturally rich lessons timed to US, UK, Middle East, and Singapore timezones.',
          points: [
            'Convenient time slots matched to your local weekend and evening hours',
            'Bilingual explanations in English to help diaspora kids understand effortlessly',
            'Thirukkural, Tamil festivals, and values woven into language practice',
            'Regular video updates and progress reports shared directly with parents',
          ],
          cta: 'Book an International Slot',
        },
      },
    },
    compare: {
      eyebrow: 'Choose What Suits You',
      title: 'Online vs Offline: Seamless Learning Both Ways',
      subtitle:
        'Both modes follow the same high-standards curriculum, personalized worksheets, and dedicated mentorship by Anitha Mam.',
      offline: {
        title: 'Offline Classroom in Pallavaram',
        tag: 'Dharga Road Centre',
        desc: 'Ideal for students living around Pallavaram, Tambaram, Chromepet, and Airport corridor who thrive with face-to-face in-person mentorship.',
        perks: [
          'Direct tactile handwriting correction & physical notebooks',
          'Quiet, distraction-free traditional study environment',
          'Physical flashcards, reading library, and printed workbooks',
          'Safe, hygienic, women-led neighborhood tuition centre',
          'Flexible early morning (from 5:00 AM) & late evening timings',
        ],
        cta: 'Visit Pallavaram Centre',
      },
      online: {
        title: 'Live Interactive Online Classes',
        tag: 'Worldwide via Google Meet / Zoom',
        desc: 'Ideal for overseas families, out-of-station learners, or busy Chennai parents wanting to avoid evening traffic commutes.',
        perks: [
          'Live interactive 1-to-1 or mini-group video sessions',
          'Screen-shared digital stroke animations and Tamil reading slides',
          'Digital PDF worksheets sent after each class via WhatsApp',
          'Flexible timezones across USA, UAE, UK, Singapore & India',
          'No commuting stress — learn comfortably from home',
        ],
        cta: 'Try an Online Class',
      },
    },
    teacher: {
      eyebrow: 'Dedicated Mentorship',
      title: 'Meet Your Teacher & Mentor',
      name: 'Anitha Mam',
      role: 'Founder & Lead Tamil Educator, Nayali Tamil Academy',
      experienceBadge: '8+ Years Experience • 1,000+ Students Guided',
      bio:
        'Passionate about making Tamil accessible and beloved, Anitha Mam founded Nayali Tamil Academy with a warm, child-centric philosophy. Known for her gentle patience, encouraging smile, and knack for turning daunting grammar into simple stories, she has helped countless reluctant learners transform into confident Tamil readers and fluent speakers.',
      quotes: [
        '"Every child can love Tamil when taught with warmth, patience, and the right encouragement."',
        '"மொழி என்பது வெறும் பாடம் அல்ல; அது நம் அடையாளம் மற்றும் அன்பு."',
      ],
      strengths: [
        { label: 'Patient & Encouraging', desc: 'No scolding or pressure; children feel safe to try and make mistakes.' },
        { label: 'Individual Attention', desc: 'Tailored pacing that adapts to each student’s unique learning speed.' },
        { label: 'Structured Pedagogy', desc: 'Clear weekly milestones, neat handwriting drills, and regular parent feedback.' },
        { label: 'Women-Led Safe Space', desc: 'A warm, trustworthy neighborhood academy parents trust wholeheartedly.' },
      ],
      placeholderNote: 'Photo placeholder: Replace with actual high-resolution portrait of Anitha Mam before final launch.',
    },
    testimonials: {
      eyebrow: 'Real Stories, Real Results',
      title: 'Loved by Parents & Students Alike',
      subtitle:
        'From improving school marks in Chennai to helping NRI kids speak Tamil at home, hear from our learning family.',
      disclaimerNote:
        'Developer Note: These are representative placeholder testimonials written based on actual academy themes (reading improvement, patient teacher, organized batches). Replace with verified parent quotes with owner permission upon launch.',
      items: [
        {
          id: '1',
          name: 'Kavitha Ramaswamy',
          relationEn: 'Mother of 4th Grade CBSE Student',
          relationTa: '4-ஆம் வகுப்பு மாணவனின் தாய்',
          locationEn: 'Pallavaram, Chennai',
          locationTa: 'பல்லாவரம், சென்னை',
          rating: 5,
          tagEn: 'CBSE School Exam Improvement',
          tagTa: 'சி.பி.எஸ்.இ தேர்வு முன்னேற்றம்',
          quoteEn:
            'My son used to dread his Tamil periods at school and struggled with letter blending. After 3 months with Anitha Mam at Nayali Academy, his handwriting improved drastically and he scored 94/100 in his mid-terms! Her patience with kids is remarkable.',
          quoteTa:
            'என் மகனுக்கு பள்ளியில் தமிழ் என்றாலே பயம் இருந்தது. அனிதா மேமிடம் சேர்த்த 3 மாதங்களில் அவனது கையெழுத்து மற்றும் வாசிப்புத் திறன் வியக்கத்தக்க வகையில் மாறியுள்ளது. இப்போது விருப்பத்துடன் தமிழ் படிக்கிறான்!',
          highlightEn: 'Scored 94/100 in mid-terms',
          highlightTa: 'தேர்வில் 94 மதிப்பெண்கள்',
        },
        {
          id: '2',
          name: 'Senthil & Deepa Kumar',
          relationEn: 'Parents of 7-Year-Old Diya',
          relationTa: '7 வயது தியாவின் பெற்றோர்',
          locationEn: 'Dallas, Texas (USA Online)',
          locationTa: 'டல்லாஸ், அமெரிக்கா (இணையவழி)',
          rating: 5,
          tagEn: 'Overseas NRI Student',
          tagTa: 'வெளிநாட்டுத் தமிழ் மாணவி',
          quoteEn:
            'Living in the US, our daughter could only respond in English. Joining Nayali online classes was the best decision. Anitha Mam uses stories and fun flashcards. Now Diya comfortably speaks Tamil with her grandparents over WhatsApp video calls!',
          quoteTa:
            'அமெரிக்காவில் இருக்கும் எங்கள் மகள் இப்போது தாத்தா பாட்டியிடம் அழகாக தமிழில் பேசுகிறாள். அனிதா மேமின் அன்பான கற்பித்தல் முறை மிகச் சிறப்பானது. வெளிநாட்டு குடும்பங்களுக்கு சிறந்த தேர்வு!',
          highlightEn: 'Speaks Tamil fluently with grandparents',
          highlightTa: 'தாத்தா பாட்டியுடன் சரளமாகப் பேசுகிறாள்',
        },
        {
          id: '3',
          name: 'Arun Prakash',
          relationEn: 'IT Professional (Adult Learner)',
          relationTa: 'மென்பொருள் பொறியாளர் (வயதுவந்தோர் வகுப்பு)',
          locationEn: 'Chromepet, Chennai',
          locationTa: 'குரோம்பேட்டை, சென்னை',
          rating: 5,
          tagEn: 'Spoken Tamil for Adults',
          tagTa: 'பேச்சுத் தமிழ் பயிற்சி',
          quoteEn:
            'I moved from Hyderabad to Chennai for work and wanted to learn conversational Tamil. The 1-to-1 adult sessions were discreet, practical, and highly flexible with my work shifts. Within two months, I could chat easily with vendors and colleagues.',
          quoteTa:
            'வேலைக்காக சென்னை வந்த எனக்கு அன்றாட உரையாடல்களைக் கற்றுக்கொள்ள அனிதா மேமின் தனிநபர் வகுப்புகள் பேருதவியாக இருந்தன. தயக்கமின்றி தமிழில் பேச இப்போது முடிகிறது.',
          highlightEn: 'Conversational confidence in 8 weeks',
          highlightTa: '8 வாரங்களில் தயக்கமின்றி பேச முடிந்தது',
        },
        {
          id: '4',
          name: 'Meenakshi Sundaram',
          relationEn: 'Mother of 9th Grade Student',
          relationTa: '9-ஆம் வகுப்பு மாணவியின் தாய்',
          locationEn: 'Tambaram, Chennai',
          locationTa: 'தாம்பரம், சென்னை',
          rating: 5,
          tagEn: 'Grammar & Seyyul Prep',
          tagTa: 'இலக்கணம் மற்றும் செய்யுள் பயிற்சி',
          quoteEn:
            'High school Tamil grammar was very challenging for my daughter. Nayali Academy’s weekly tests and custom worksheets made rules like Punarchi and Ilakkana Kurippu so simple. Her confidence has doubled!',
          quoteTa:
            'ஒன்பதாம் வகுப்பு தமிழ் இலக்கணம் கடினமாக இருந்தபோது, வாராந்திர பயிற்சித்தாள்கள் மூலம் மிக எளிமையாகப் புரிய வைத்தார்கள். பள்ளியில் முதல் வரிசை மதிப்பெண்கள் பெற்றுள்ளாள்.',
          highlightEn: 'Doubled confidence in board grammar',
          highlightTa: 'இலக்கணத்தில் சிறந்த முன்னேற்றம்',
        },
      ] as Testimonial[],
    },
    pricing: {
      eyebrow: 'Transparent & Accessible',
      title: 'Simple, Flexible Tuition Plans',
      subtitle:
        'Quality education rooted in value. Contact us directly for current monthly batch fees and trial schedules.',
      placeholderDisclaimer:
        'Note: Fees are customized based on grade level and batch choice. Click "Inquire on WhatsApp" for exact fee structure.',
      plans: [
        {
          id: 'group',
          nameEn: 'Group Tuition Batches',
          nameTa: 'குழு பயிற்சி வகுப்புகள்',
          badgeEn: 'Most Popular',
          badgeTa: 'அதிகம் விரும்பப்படுவது',
          descriptionEn: 'Small interactive groups (4–6 students) with peer motivation and structured syllabus coverage.',
          descriptionTa: '4 முதல் 6 மாணவர்கள் கொண்ட சிறிய குழுக்கள், சக மாணவர் ஊக்கம் மற்றும் முழு பாடத்திட்டப் பயிற்சி.',
          priceNoteEn: 'Affordable Monthly Fee • Contact for exact quote',
          priceNoteTa: 'குறைந்த மாதக் கட்டணம் • கட்டண விவரத்திற்கு தொடர்பு கொள்ளவும்',
          popular: true,
          features: [
            { textEn: '3 to 5 classes per week (1 hour each)', textTa: 'வாரத்திற்கு 3 முதல் 5 வகுப்புகள் (தலா 1 மணி நேரம்)' },
            { textEn: 'School textbook & syllabus alignment', textTa: 'பள்ளிப் பாடத்திட்டம் மற்றும் தேர்வு வழிகாட்டுதல்' },
            { textEn: 'Weekly reading & dictation tests', textTa: 'வாராந்திர வாசிப்பு மற்றும் சொல்வதை எழுதுதல் தேர்வு' },
            { textEn: 'Printed or digital worksheets included', textTa: 'பயிற்சித்தாள்கள் மற்றும் வீட்டுப்பாட உதவிகள்' },
            { textEn: 'Available both Offline in Pallavaram & Online', textTa: 'பல்லாவரம் மையம் மற்றும் இணையவழி இரண்டு வழிகளிலும்' },
          ],
        },
        {
          id: 'one-on-one',
          nameEn: '1-to-1 Personalized Coaching',
          nameTa: 'தனிநபர் பிரத்யேக பயிற்சி',
          badgeEn: 'Maximum Attention',
          badgeTa: 'முழு தனி கவனம்',
          descriptionEn: 'Dedicated one-on-one sessions for students needing intensive catch-up or accelerated learning.',
          descriptionTa: 'மாணவரின் தேவையை அறிந்து தனிப்பட்ட வேகத்தில் கற்பிக்கும் தீவிர பயிற்சி முறை.',
          priceNoteEn: 'Premium Personalized Fee • Contact for details',
          priceNoteTa: 'பிரத்யேக பயிற்சி கட்டணம் • விவரங்களை அறிய அணுகவும்',
          popular: false,
          features: [
            { textEn: '100% individual teacher attention', textTa: '100% தனி நபர் ஆசிரிய கவனிப்பு' },
            { textEn: 'Custom curriculum tailored to student’s weak areas', textTa: 'மாணவரின் பலவீனங்களை சரிசெய்யும் தனிப்பட்ட பாடத்திட்டம்' },
            { textEn: 'Flexible class timings (Morning / Evening)', textTa: 'நேரங்களை வசதிக்கேற்ப மாற்றிக்கொள்ளும் வசதி' },
            { textEn: 'Intensive handwriting stroke & spelling correction', textTa: 'எழுத்துப் பிழை மற்றும் கையெழுத்து சீரமைப்பு' },
            { textEn: 'Ideal for overseas kids & board exam students', textTa: 'வெளிநாட்டு குழந்தைகள் மற்றும் பொதுத்தேர்வு மாணவர்களுக்கு சிறந்தது' },
          ],
        },
        {
          id: 'adults',
          nameEn: 'Adult Spoken & Script Starter',
          nameTa: 'வயதுவந்தோர் பேச்சு மற்றும் எழுத்துத் தமிழ்',
          badgeEn: 'Flexible Timing',
          badgeTa: 'வசதியான நேரங்கள்',
          descriptionEn: 'Practical conversational Tamil designed for professionals, non-Tamil speakers, and cultural enthusiasts.',
          descriptionTa: 'வேலைவாய்ப்பு மற்றும் அன்றாட வாழ்க்கைக்காக தமிழைக் கற்றுக்கொள்ள விரும்பும் பெரியவர்களுக்கான சிறப்புப் பயிற்சி.',
          priceNoteEn: 'Flexible Modular Fee • Contact for schedule',
          priceNoteTa: 'மாதாந்திர / தொகுதி கட்டணம் • விவரங்களை அறியவும்',
          popular: false,
          features: [
            { textEn: 'Everyday conversational dialogues & vocabulary', textTa: 'அன்றாட பேச்சு வழக்கு மற்றும் உரையாடல் பயிற்சி' },
            { textEn: 'Zero prior knowledge required', textTa: 'முன் அனுபவம் ஏதுமின்றி ஆரம்ப நிலையிலிருந்து கற்பித்தல்' },
            { textEn: 'Discreet adult-friendly private or pair sessions', textTa: 'பெரியவர்களுக்கு ஏற்றவாறு எளிய முறையில் பயிற்சி' },
            { textEn: 'Optional Tamil sign-board & basic reading module', textTa: 'பெயர்ப்பலகைகள் மற்றும் எளிய செய்திகளை வாசிக்கும் பயிற்சி' },
            { textEn: 'Early morning & weekend slots available', textTa: 'காலை மற்றும் வார இறுதி நாட்கள் வகுப்புகள்' },
          ],
        },
      ] as PricingPlan[],
    },
    registration: {
      eyebrow: 'Fast & Easy',
      title: 'Book Your Free Demo Class Today',
      subtitle:
        'Fill out the form below. When you click submit, we will prepare your registration details directly into WhatsApp for instant confirmation with Anitha Mam!',
      studentNameLabel: 'Student Name *',
      studentNamePlaceholder: 'e.g. Kavin / Ananya',
      parentNameLabel: 'Parent / Guardian Name (if under 18)',
      parentNamePlaceholder: 'e.g. Ramesh Kumar',
      ageLabel: 'Age / School Grade *',
      agePlaceholder: 'e.g. 8 years (Grade 3) or Adult',
      phoneLabel: 'Phone / WhatsApp Number *',
      phonePlaceholder: 'e.g. +91 98765 43210',
      modeLabel: 'Preferred Mode *',
      modes: {
        offline: 'Offline (Pallavaram Centre)',
        online: 'Live Online (Zoom / Meet)',
        flexible: 'Either / Flexible',
      },
      levelLabel: 'Current Tamil Level *',
      levels: {
        beginner: 'Complete Beginner (Doesn’t know letters yet)',
        intermediate: 'Knows Letters, Struggles with Reading / Writing',
        school: 'School Exam Support (State / CBSE / ICSE)',
        spoken: 'Spoken Tamil Only (Conversation focus)',
      },
      timingLabel: 'Preferred Class Timing',
      timings: {
        morning: 'Early Morning (5:00 AM – 8:00 AM IST)',
        evening: 'Evening (4:30 PM – 9:00 PM IST)',
        weekend: 'Weekends Only (Sat / Sun)',
      },
      notesLabel: 'Any specific goals or school board details?',
      notesPlaceholder: 'e.g. CBSE 4th grade, needs help with handwriting and spelling...',
      submitBtn: 'Confirm Free Demo via WhatsApp',
      submittingText: 'Preparing WhatsApp message...',
      guarantee: '🔒 No payment required for demo. Direct chat with Anitha Mam.',
      toastSuccess: 'Redirecting to WhatsApp to send your free demo booking...',
    },
    visit: {
      eyebrow: 'Our Location',
      title: 'Visit Our Academy in Pallavaram',
      subtitle:
        'Centrally located on Dharga Road, Zamin Pallavaram with ample parking, easy bus/train connectivity, and a peaceful learning environment.',
      addressCardTitle: 'Pallavaram Learning Centre',
      operatingHoursTitle: 'Working Hours',
      directionsBtn: 'Get Directions on Google Maps',
      callBtn: 'Call Academy Directly',
      whatsappBtn: 'Message on WhatsApp',
      amenities: [
        'Safe, air-cooled, women-owned neighborhood centre',
        'Physical library of Tamil storybooks & workbooks',
        'Close to Pallavaram Railway Station & GST Road',
        'Early morning batches from 5:00 AM for school kids',
      ],
    },
    faq: {
      eyebrow: 'Got Questions?',
      title: 'Frequently Asked Questions',
      subtitle: 'Clear answers to everything parents and learners ask us most often.',
      items: [
        {
          id: 'faq-1',
          questionEn: 'What is the right age for a child to start Tamil tuition?',
          questionTa: 'குழந்தைகளுக்கு எந்த வயதில் தமிழ் பயிற்சி தொடங்கலாம்?',
          answerEn:
            'Children as young as 4 to 5 years can start with our gentle pre-primary phonetic module, where they learn letter sounds through songs, drawings, and picture association. For school-going kids (Grades 1 to 10), we align directly with their school curriculum.',
          answerTa:
            '4 முதல் 5 வயது முதலே குழந்தைகள் எங்கள் ஒலிப்பு முறை மூலம் பாடல்கள் மற்றும் படங்கள் வாயிலாக எளிதாக தமிழ் கற்கத் தொடங்கலாம். பள்ளி செல்லும் மாணவர்களுக்கு அவர்களின் பள்ளிப் பாடத்திட்டத்திற்கு ஏற்ப பயிற்சி அளிக்கிறோம்.',
        },
        {
          id: 'faq-2',
          questionEn: 'How do the online classes work for overseas or out-of-station students?',
          questionTa: 'வெளிநாட்டு மற்றும் வெளியூர் மாணவர்களுக்கு இணையவழி வகுப்புகள் எவ்வாறு நடைபெறுகின்றன?',
          answerEn:
            'Online classes are conducted live via Google Meet or Zoom. We use digital whiteboards, stroke-by-stroke letter animations, and interactive reading decks. After each session, personalized printable PDF worksheets are sent via WhatsApp. Parents receive weekly audio/video feedback.',
          answerTa:
            'கூகுள் மீட் அல்லது ஜூம் மூலம் நேரலையாக வகுப்புகள் நடைபெறுகின்றன. டிஜிட்டல் திரையில் எழுத்துக்களை வரைந்து காட்டி, ஊடாடும் முறையில் கற்பிக்கப்படுகிறது. ஒவ்வொரு வகுப்பிற்குப் பிறகும் பயிற்சித்தாள்கள் வாட்ஸ்அப் மூலம் அனுப்பப்படும்.',
        },
        {
          id: 'faq-3',
          questionEn: 'Is the free demo class really free, and what happens during it?',
          questionTa: 'இலவச மாதிரி வகுப்பு உண்மையிலேயே இலவசமா? அதில் என்ன நடக்கும்?',
          answerEn:
            'Yes, the 30-minute demo class is 100% free with zero obligation. During the demo, Anitha Mam assesses the student’s current Tamil reading, writing, or speaking comfort level, demonstrates our fun teaching method, and suggests a customized learning plan.',
          answerTa:
            'ஆம், 30 நிமிட மாதிரி வகுப்பு முற்றிலும் இலவசம். இதில் ஆசிரியையான அனிதா மேம் மாணவரின் தற்போதைய வாசிப்பு மற்றும் எழுத்து நிலையை கனிவுடன் மதிப்பிட்டு, அவர்களுக்கு ஏற்ற கற்றல் திட்டத்தை பரிந்துரைப்பார்.',
        },
        {
          id: 'faq-4',
          questionEn: 'What is the student-to-teacher ratio in group batches?',
          questionTa: 'குழு வகுப்புகளில் எத்தனை மாணவர்கள் இருப்பார்கள்?',
          answerEn:
            'To maintain genuine personal attention, our group batches never exceed 4 to 6 students. Every child gets dedicated time to read aloud, have their handwriting reviewed, and ask questions without hesitation.',
          answerTa:
            'ஒவ்வொரு மாணவருக்கும் முழு கவனம் கிடைக்க வேண்டும் என்பதற்காக, ஒரு குழுவில் அதிகபட்சமாக 4 முதல் 6 மாணவர்கள் மட்டுமே சேர்க்கப்படுகிறார்கள்.',
        },
        {
          id: 'faq-5',
          questionEn: 'Do you provide study materials and handwriting worksheets?',
          questionTa: 'பயிற்சிப் புத்தகங்கள் மற்றும் கையெழுத்துப் பயிற்சித்தாள்கள் வழங்கப்படுமா?',
          answerEn:
            'Yes! We provide structured Tamil letter tracing sheets, custom grammar rule summaries, vocabulary charts, and weekly dictation lists. Physical printouts are provided for offline students, and high-res printable PDFs are shared for online students.',
          answerTa:
            'ஆம்! தமிழ் எழுத்து வரிவடிவப் பயிற்சித் தாள்கள், இலக்கணக் குறிப்புகள் மற்றும் வாராந்திர பயிற்சித் தாள்கள் அனைத்து மாணவர்களுக்கும் பிரத்யேகமாக வழங்கப்படுகின்றன.',
        },
        {
          id: 'faq-6',
          questionEn: 'Why do you offer early morning batches starting at 5:00 AM?',
          questionTa: 'காலை 5:00 மணி முதல் வகுப்புகள் தொடங்குவது ஏன்?',
          answerEn:
            'Many school children have packed evening routines with school homework and sports. An early morning 5:00 AM or 6:00 AM session allows students to study Tamil with a fresh mind before school starts, without evening fatigue.',
          answerTa:
            'மாலை நேரங்களில் வீட்டுப்பாடம் மற்றும் விளையாட்டு இருப்பதால், அதிகாலை 5:00 மற்றும் 6:00 மணி வகுப்புகள் புத்துணர்ச்சியோடு எளிதில் மனனம் செய்ய குழந்தைகளுக்கு பெரிதும் உதவுகின்றன.',
        },
        {
          id: 'faq-7',
          questionEn: 'Can adults with zero Tamil background join to learn spoken Tamil?',
          questionTa: 'தமிழ் சிறிதும் தெரியாத பெரியவர்கள் பேச்சுத் தமிழ் கற்றுக்கொள்ள முடியுமா?',
          answerEn:
            'Absolutely! We run special private modules for working professionals, doctors, engineers, and homemakers who have moved to Tamil Nadu. We teach practical conversational phrases, daily shopping vocabulary, and polite interactions without any pressure to memorize the script unless you want to.',
          answerTa:
            'நிச்சயமாக! சென்னைக்கு பணி நிமித்தமாக வந்த பிற மாநிலத்தவர்கள் மற்றும் வெளிநாட்டினருக்கு, அன்றாட வாழ்க்கைக்குத் தேவையான எளிய பேச்சுத் தமிழ் பயிற்சி தனியாக வழங்கப்படுகிறது.',
        },
      ] as FaqItem[],
    },
    footer: {
      aboutTitle: 'Nayali Tamil Academy',
      aboutDesc:
        'A women-owned premier Tamil learning sanctuary in Pallavaram, Chennai. Preserving our timeless classical language with modern, joyful, and child-centric education.',
      proverb: '“யாதும் ஊரே யாவரும் கேளிர்” — கணியன் பூங்குன்றனார்',
      quickLinksTitle: 'Quick Links',
      contactTitle: 'Direct Contact',
      copyright: '© 2026 Nayali Tamil Academy. All rights reserved.',
      credit: 'Demo website crafted with ❤️ by Pranavesh N (pranaveshn.vercel.app)',
    },
  },

  ta: {
    banner: {
      text: '✨ நயலி தமிழ் அகாடமி, பல்லாவரம் — மாதிரி இணையதள முன்னோட்டம் • வடிவமைப்பு: பிரணவேஷ் என்',
      action: 'இலவச மாதிரி வகுப்பு',
      dismiss: 'முன்னோட்டப் பட்டியை மூடு',
    },
    nav: {
      about: 'அறிமுகம்',
      offers: 'பாடத் திட்டங்கள்',
      path: 'கற்றல் படிநிலைகள்',
      audience: 'யாருக்கானது?',
      compare: 'நேரடி vs இணையவழி',
      teacher: 'ஆசிரியர்',
      testimonials: 'மதிப்புரைகள்',
      pricing: 'கட்டண விவரம்',
      visit: 'மைய முகவரி',
      faq: 'கேள்வி பதில்',
      demoCta: 'இலவச டெமோ வகுப்பு',
      callNow: 'அழைக்க',
    },
    hero: {
      badge: '🌸 மகளிர் வழிநடத்தும் நிறுவனம் • பல்லாவரம் & உலகளாவிய இணையவழி',
      titleHighlight: 'எளிய வழியில்',
      titleRest: 'தமிழ் கற்போம்!',
      tamilSubtitle: 'தமிழ் கற்போம், மகிழ்வோம்',
      description:
        'பள்ளி மாணவர்கள், பெரியவர்கள் மற்றும் வெளிநாட்டுத் தமிழ் குடும்பங்களுக்கான தனித்துவமான தமிழ் பயிற்சி. பிழையற்ற வாசிப்பு, முத்து போன்ற அழகிய கையெழுத்து, மற்றும் சரளமாகப் பேசும் திறன் பெற பல்லாவரத்திலும் இணையவழியிலும் இன்றே இணையுங்கள்.',
      whatsappCta: 'இலவச மாதிரி வகுப்பை முன்பதிவு செய்க',
      callCta: 'அழைக்க: +91 91761 07775',
      trustBadge: 'கூகுள் மதிப்பீடு 5.0 / 5.0',
      reviewNote: '78-க்கும் மேற்பட்ட பெற்றோர் மற்றும் மாணவர்களின் நற்சான்றிதழ்',
      featureBadges: [
        'நேரடி & இணையவழி வகுப்புகள்',
        'தனிநபர் மற்றும் சிறிய குழுப் பயிற்சி',
        'அரசு, சி.பி.எஸ்.இ & ஐ.சி.எஸ்.இ பாடத்திட்டம்',
      ],
    },
    offers: {
      eyebrow: 'முழுமையான தமிழ் கல்வி',
      title: 'ஒவ்வொரு மாணவனுக்கும் ஏற்ற தனித்துவக் கற்பித்தல்',
      subtitle:
        'பாரம்பரிய முறையோடு நவீனம் இணைந்த விளையாட்டு வழி கற்றல், கதைகள், மற்றும் பயிற்சித்தாள்கள் மூலம் தமிழ் இனிமை உங்கள் இல்லம் தேடி வருகிறது.',
      items: [
        {
          id: 'interactive',
          title: 'ஊடாடும் நேரலை வகுப்புகள்',
          description: 'மனப்பாடம் செய்யாமல், கலந்துரையாடல் மற்றும் காட்சிப் படங்கள் மூலம் ஆர்வமூட்டும் கற்பித்தல் முறை.',
          badge: 'ஆர்வமூட்டும் வகுப்புகள்',
        },
        {
          id: 'one-on-one',
          title: 'தனிநபர் & குழு வகுப்புகள்',
          description: 'மாணவரின் தேவையை அறிந்து தனிப்பட்ட வேகத்தில் கற்பிக்கும் வசதி மற்றும் 4-6 மாணவர் கொண்ட குழுக்கள்.',
          badge: 'தனி கவனம்',
        },
        {
          id: 'activity',
          title: 'விளையாட்டு வழி கல்வி',
          description: 'சொல் புதிர், பட அட்டைகள் மற்றும் நா நெகிழ் பயிற்சிகள் மூலம் இலக்கணத்தையும் சொற்களையும் எளிதாகக் கற்றல்.',
          badge: 'மகிழ்ச்சியான சூழல்',
        },
        {
          id: 'storytelling',
          title: 'கதை சொல்லுதல் & திருக்குறள்',
          description: 'பஞ்சதந்திரக் கதைகள், தெனாலிராமன் கதைகள் மற்றும் எளிய திருக்குறள் மூலம் நற்பண்புகளுடன் தமிழ் பேச்சு.',
          badge: 'கலாச்சாரப் பிணைப்பு',
        },
        {
          id: 'assessments',
          title: 'வாராந்திர முன்னேற்றத் தேர்வுகள்',
          description: 'பயமின்றி வாசிப்பு வேகம், எழுத்துப்பிழை திருத்தம் மற்றும் சொற்பொழிவுத் திறனை மதிப்பீடு செய்தல்.',
          badge: 'தொடர் கண்காணிப்பு',
        },
        {
          id: 'worksheets',
          title: 'பிரத்யேக பயிற்சித் தாள்கள்',
          description: 'தமிழ் எழுத்து வடிவமைப்பு, இலக்கணப் பயிற்சி புத்தகங்கள் மற்றும் வீட்டுப்பாட வழிகாட்டிகள்.',
          badge: 'எழுத்துப் பயிற்சி',
        },
      ],
    },
    path: {
      eyebrow: 'முறைப்படியான முன்னேற்றம்',
      title: 'நயலியின் 6-படி தமிழ் கற்றல் வழிமுறை',
      subtitle: 'முதல் எழுத்தை அறிவது முதல் பெருமிதத்தோடு சரளமாகப் பேசி எழுதும் நிலை வரை.',
      steps: [
        {
          step: '01',
          tamil: 'உயிர் & மெய் எழுத்துகள்',
          title: 'அடிப்படை எழுத்து & உச்சரிப்பு',
          description: '12 உயிர், 18 மெய் மற்றும் ஆய்த எழுத்தை ஒலிப்பு முறையோடு சரியான வரிவடிவத்தில் பழகுதல்.',
          outcome: 'தெளிவான எழுத்து அடையாளம் மற்றும் பிழையற்ற உச்சரிப்பு.',
        },
        {
          step: '02',
          tamil: 'உயிர்மெய் & சொற்கள்',
          title: 'குறியீடுகள் & சொல் உருவாக்கம்',
          description: 'கொம்பு, கால், சுழி போன்ற குறியீடுகளைப் புரிந்து கொண்டு 216 உயிர்மெய் எழுத்துக்களையும் சொற்களையும் அமைத்தல்.',
          outcome: 'எழுத்துக்களைக் கூட்டி சொற்களை எளிதாக வாசித்தல்.',
        },
        {
          step: '03',
          tamil: 'வாக்கிய அமைப்புகள்',
          title: 'இலக்கணம் & வாக்கியப் பயிற்சி',
          description: 'திணை, பால், எண், இடம் மற்றும் காலங்கள் அறிந்து சரியான வாக்கியங்களை உருவாக்கக் கற்றல்.',
          outcome: 'தயக்கமின்றி சொந்தமாக வாக்கியங்கள் அமைக்கும் திறன்.',
        },
        {
          step: '04',
          tamil: 'பிழையற்ற வாசிப்பு',
          title: 'நளினமான வாசிப்புப் பழக்கம்',
          description: 'கதை நூல்கள், செய்யுள் வரிகள் மற்றும் பாடப்புத்தகப் பகுதிகளை ஏற்ற இறக்கத்தோடு சரளமாக வாசித்தல்.',
          outcome: 'பள்ளித் தேர்வுகளில் அதிவேக வாசிப்பு மற்றும் புரிதல்.',
        },
        {
          step: '05',
          tamil: 'அழகிய கையெழுத்துப் பயிற்சி',
          title: 'முத்து போன்ற கையெழுத்து',
          description: 'எழுத்துச் சீரமைப்பு, சொல்வதை எழுதுதல் (Dictation), ர/ற, ல/ள/ழ வேறுபாடுகள் களையப்பட்ட பிழையற்ற எழுத்து.',
          outcome: 'தேர்வுகளில் முழு மதிப்பெண் பெற உதவும் தெளிவான கையெழுத்து.',
        },
        {
          step: '06',
          tamil: 'சரளமாகப் பேசுதல்',
          title: 'பெருமிதத்தோடு உரையாடுதல்',
          description: 'மேடைப் பேச்சு, கதை கூறுதல் மற்றும் அன்றாட வாழ்க்கையில் தமிழில் தன்னம்பிக்கையுடன் உரையாடுதல்.',
          outcome: 'தாய்மொழியை பெருமையோடு சரளமாகப் பேசும் தன்னம்பிக்கை.',
        },
      ],
    },
    audience: {
      eyebrow: 'அனைவருக்கும் ஏற்ற வகுப்புகள்',
      title: 'நயலி தமிழ் அகாடமி யாருக்கானது?',
      subtitle: 'தொடக்கப் பள்ளி மாணவர் முதல் உலகெங்கும் வாழும் தமிழ் ஆர்வலர்கள் வரை அனைவருக்கும் பிரத்யேக பாடங்கள்.',
      tabs: {
        kids: 'தொடக்கப் பள்ளி குழந்தைகள்',
        teens: 'உயர்நிலைப் பள்ளி & பொதுத்தேர்வு',
        adults: 'பெரியவர்கள் / பிற மொழியினர்',
        overseas: 'வெளிநாட்டுத் தமிழ் குடும்பங்கள்',
      },
      content: {
        kids: {
          tag: 'வயது 4 – 11 • தொடக்க நிலை மற்றும் பள்ளி உதவி',
          title: 'குழந்தைகளுக்கு தமிழில் வலுவான அடித்தளம்',
          description: 'ஆங்கில வழிப் பள்ளிகளில் படிக்கும் குழந்தைகளுக்கு தமிழ் இரண்டாம் மொழியாக இருப்பதால் ஏற்படும் தயக்கத்தை போக்கி, பாடல்கள், வரைபடங்கள் மூலம் தமிழ் மேல் பேரார்வத்தை உருவாக்குகிறோம்.',
          points: [
            'சி.பி.எஸ்.இ, சமச்சீர் கல்வி மற்றும் ஐ.சி.எஸ்.இ பாடங்களுக்கு ஏற்றது',
            'வாசிப்பு மற்றும் சொல்வதை எழுதுதலில் உள்ள பயத்தைப் போக்குதல்',
            'குழந்தைகளை மகிழ்விக்கும் வண்ணமயமான பயிற்சித்தாள்கள்',
            'தாயன்போடு கனிவாகக் கற்பிக்கும் ஆசிரியர் அணுகுமுறை',
          ],
          cta: 'உங்கள் குழந்தையை இணைக்க',
        },
        teens: {
          tag: 'வயது 12 – 18 • பொதுத்தேர்வு மற்றும் இலக்கணம்',
          title: 'தேர்வில் அதிக மதிப்பெண் & இலக்கணத் தெளிவு',
          description: '8, 9, 10-ஆம் வகுப்பு மாணவர்களுக்கு கடினமாகத் தோன்றும் இலக்கணம், செய்யுள் வினாக்கள், கட்டுரை மற்றும் கடிதம் எழுதும் முறையை எளிமைப்படுத்தி அதிக மதிப்பெண்கள் பெற வழிகாட்டுகிறோம்.',
          points: [
            'வேற்றுமை, புணர்ச்சி, இலக்கணக் குறிப்புகளில் முழுத் தெளிவு',
            'முந்தைய ஆண்டு வினாத்தாள் பயிற்சிகள் மற்றும் நேர மேலாண்மை',
            'சொல்வளம் மிக்க கட்டுரைகள் மற்றும் சுருக்கி வரைதல் பயிற்சி',
            'காலை மற்றும் மாலை வசதியான நேரங்கள்',
          ],
          cta: 'மதிப்பெண்களை உயர்த்த',
        },
        adults: {
          tag: 'அனைத்து வயதினருக்கும் • பணிபுரிவோர் & பிற மாநிலத்தவர்',
          title: 'தன்னம்பிக்கையுடன் தமிழில் பேசவும் படிக்கவும்',
          description: 'சென்னைக்கு பணி நிமித்தமாக வந்தவரா? அல்லது தமிழ் பேசும் குடும்பத்துடன் இணைந்து உரையாட விரும்புகிறீர்களா? எவ்வித தயக்கமும் இன்றி எளிய முறையில் பேச்சுத் தமிழ் கற்கலாம்.',
          points: [
            'அலுவலகம், சந்தை மற்றும் பயணத்திற்குத் தேவையான நடைமுறை பேச்சுத் தமிழ்',
            'பேச்சுத் தமிழ் அல்லது எழுத்துக் கூட்டுதல் மட்டும் கற்கும் விருப்பத் தேர்வு',
            'வேலை நேரத்திற்கு ஏற்ற தனிநபர் பிரத்யேக வகுப்புகள்',
            'ஆரம்ப நிலையில் இருப்பவர்களுக்கு கனிவான வழிகாட்டல்',
          ],
          cta: 'பெரியவர்களுக்கான வகுப்பில் சேர',
        },
        overseas: {
          tag: 'உலகத் தமிழர்கள் • அமெரிக்கா, ஐரோப்பா, வளைகுடா, சிங்கப்பூர்',
          title: 'வெளிநாட்டுக் குழந்தைகளுக்கு தாய்மொழி இணைப்பு',
          description: 'தமிழகத்திற்கு வெளியே வாழும் குழந்தைகள் தாய்மொழியை மறந்துவிடாமல் இருக்க, உங்கள் நாட்டு நேரத்திற்கு ஏற்ப இணையவழியில் கலாச்சாரப் பின்னணியோடு தமிழ் கற்பிக்கிறோம்.',
          points: [
            'அமெரிக்கா, லண்டன், வளைகுடா மற்றும் சிங்கப்பூர் நேரங்களுக்கு ஏற்ற வகுப்புகள்',
            'ஆங்கிலம் மூலமாக எளிதில் புரிய வைக்கும் இருமொழிப் பயிற்றுமுறை',
            'திருக்குறள், தமிழ் விழாக்கள் மற்றும் பாரம்பரிய விழுமியங்கள்',
            'பெற்றோருக்கு தொடர் முன்னேற்ற அறிக்கை மற்றும் காணொளி வழிகாட்டல்',
          ],
          cta: 'வெளிநாட்டு நேர வகுப்பை முன்பதிவு செய்க',
        },
      },
    },
    compare: {
      eyebrow: 'உங்கள் வசதிக்கேற்ப தேர்வு செய்யுங்கள்',
      title: 'நேரடி வகுப்பு vs இணையவழி வகுப்பு',
      subtitle: 'இரண்டு முறைகளிலும் ஒரே தரமான பாடத்திட்டம், தனிநபர் கவனிப்பு மற்றும் அனிதா மேமின் நேரடி வழிகாட்டல் உண்டு.',
      offline: {
        title: 'பல்லாவரம் நேரடி வகுப்பு மையம்',
        tag: 'தர்கா சாலை மையம்',
        desc: 'பல்லாவரம், தாம்பரம், குரோம்பேட்டை சுற்றுவட்டார மாணவர்களுக்கு ஆசிரியரின் நேரடி வழிகாட்டலில் படிக்க மிகச் சிறந்த வாய்ப்பு.',
        perks: [
          'நேரடி கையெழுத்துத் திருத்தம் மற்றும் நோட்டுப் புத்தகப் பயிற்சி',
          'அமைதியான, கவனச்சிதறல் இல்லாத பாரம்பரிய கற்றல் சூழல்',
          'நேரடி வாசிப்பு நூலகம் மற்றும் அச்சிடப்பட்ட பயிற்சித்தாள்கள்',
          'பாதுகாப்பான மகளிர் வழிநடத்தும் அக்கம்பக்கத் tuition மையம்',
          'அதிகாலை 5:00 மணி மற்றும் மாலை வசதியான நேரங்கள்',
        ],
        cta: 'பல்லாவரம் மையத்திற்கு வருகை தர',
      },
      online: {
        title: 'நேரலை இணையவழி வகுப்புகள்',
        tag: 'உலகளாவிய கூகுள் மீட் / ஜூம்',
        desc: 'வெளிநாட்டுத் தமிழ் குடும்பங்கள் மற்றும் போக்குவரத்து நெரிசலைத் தவிர்க்க விரும்பும் சென்னை பெற்றோர்களுக்கான வசதி.',
        perks: [
          'நேரலை காணொளி மூலம் தனிநபர் அல்லது சிறிய குழு வகுப்புகள்',
          'திரையில் தோன்றும் டிஜிட்டல் எழுத்து அசைவூட்டம் மற்றும் ஸ்லைடுகள்',
          'வகுப்பு முடிந்ததும் வாட்ஸ்அப்பில் பகிரப்படும் PDF பயிற்சித் தாள்கள்',
          'அமெரிக்கா, மத்திய கிழக்கு, சிங்கப்பூர் நேரங்களுக்கு ஏற்ப வசதி',
          'வீட்டிலிருந்தபடியே எவ்வித பயணச் சிரமமுமின்றி அமைதியாகக் கற்றல்',
        ],
        cta: 'இணையவழி வகுப்பை முயற்சிக்க',
      },
    },
    teacher: {
      eyebrow: 'அர்ப்பணிப்புமிக்க ஆசிரியர்',
      title: 'உங்கள் ஆசிரியரை சந்தியுங்கள்',
      name: 'அனிதா மேம்',
      role: 'நிறுவனர் மற்றும் முதன்மை தமிழ் ஆசிரியை, நயலி தமிழ் அகாடமி',
      experienceBadge: '8+ ஆண்டுகள் அனுபவம் • 1000+ மாணவர்கள் வழிகாட்டல்',
      bio:
        'தமிழைக் குழந்தைகள் நேசிக்கும் வகையில் எளிய முறையில் கற்பிப்பதில் தனித்திறமை கொண்டவர் அனிதா மேம். தாயன்பு கலந்த பொறுமை, எப்போதும் புன்னகை பூத்த முகம், மற்றும் கடினமான இலக்கணத்தையும் கதைகளாக மாற்றும் கலை ஆகியவற்றால் பல நூறு மாணவர்களின் பயத்தைப் போக்கி, தமிழ்ப் பற்றாளர்களாக மாற்றியுள்ளார்.',
      quotes: [
        '“அன்போடும் பொறுமையோடும் கற்பிக்கும்போது எந்தக் குழந்தையும் தமிழை ரசித்து கற்கும்.”',
        '“மொழி என்பது வெறும் பாடம் அல்ல; அது நம் அடையாளம் மற்றும் அன்பு.”',
      ],
      strengths: [
        { label: 'பொறுமையும் கனிவும்', desc: 'கோபமோ கண்டிப்போ இன்றி, தவறுகளைச் சுட்டிக்காட்டி குழந்தைகளை ஊக்கப்படுத்துதல்.' },
        { label: 'தனிநபர் கவனம்', desc: 'ஒவ்வொரு குழந்தையின் கற்கும் வேகத்தைப் புரிந்து அதற்கேற்பப் பாடம் புகட்டுதல்.' },
        { label: 'முறைப்படியான கற்பித்தல்', desc: 'வாராந்திர இலக்குகள், கையெழுத்துப் பயிற்சி மற்றும் பெற்றோருக்கு தொடர் தகவல்.' },
        { label: 'நம்பகமான பாதுகாப்பான சூழல்', desc: 'பெற்றோர்கள் முழு மனதுடன் நம்பும் பாதுகாப்பான கல்விக்கூடம்.' },
      ],
      placeholderNote: 'புகைப்பட மாதிரி: இறுதி வெளியீட்டின் போது அனிதா மேமின் உண்மையான புகைப்படத்தைப் பொருத்தவும்.',
    },
    testimonials: {
      eyebrow: 'பெற்றோரின் நற்சான்றிதழ்கள்',
      title: 'மாணவர்களும் பெற்றோரும் பகிர்ந்த நல்வார்த்தைகள்',
      subtitle: 'சென்னையில் பள்ளி மதிப்பெண் உயர்வு முதல் அமெரிக்காவில் தமிழ் பேசும் குழந்தைகள் வரை.',
      disclaimerNote:
        'டெவலப்பர் குறிப்பு: இவை உண்மைத் தன்மையை உணர்த்தும் மாதிரி கருத்துக்கள். உரிமையாளரின் ஒப்புதலுடன் உண்மையான கருத்துக்கள் இங்கே சேர்க்கப்படும்.',
      items: [
        {
          id: '1',
          name: 'கவிதா ராமசுவாமி',
          relationEn: 'Mother of 4th Grade CBSE Student',
          relationTa: '4-ஆம் வகுப்பு மாணவனின் தாய்',
          locationEn: 'Pallavaram, Chennai',
          locationTa: 'பல்லாவரம், சென்னை',
          rating: 5,
          tagEn: 'CBSE Exam Prep',
          tagTa: 'சி.பி.எஸ்.இ தேர்வு முன்னேற்றம்',
          quoteEn:
            'My son used to dread his Tamil periods at school. After 3 months with Anitha Mam, his handwriting improved drastically and he scored 94/100 in his mid-terms! Her patience is remarkable.',
          quoteTa:
            'என் மகனுக்கு பள்ளியில் தமிழ் என்றாலே பயம் இருந்தது. அனிதா மேமிடம் சேர்த்த 3 மாதங்களில் அவனது கையெழுத்து மற்றும் வாசிப்புத் திறன் வியக்கத்தக்க வகையில் மாறியுள்ளது. இப்போது ஆர்வத்தோடு தமிழ் படிக்கிறான்!',
          highlightEn: 'Scored 94/100 in mid-terms',
          highlightTa: 'தேர்வில் 94 மதிப்பெண்கள்',
        },
        {
          id: '2',
          name: 'செந்தில் & தீபா குமார்',
          relationEn: 'Parents of 7-Year-Old Diya',
          relationTa: '7 வயது தியாவின் பெற்றோர்',
          locationEn: 'Dallas, Texas (USA Online)',
          locationTa: 'டல்லாஸ், அமெரிக்கா (இணையவழி)',
          rating: 5,
          tagEn: 'Overseas NRI Student',
          tagTa: 'வெளிநாட்டுத் தமிழ் மாணவி',
          quoteEn:
            'Living in the US, our daughter could only respond in English. Joining Nayali was the best decision. Now Diya comfortably speaks Tamil with her grandparents over WhatsApp video calls!',
          quoteTa:
            'அமெரிக்காவில் இருக்கும் எங்கள் மகள் இப்போது தாத்தா பாட்டியிடம் அழகாக தமிழில் பேசுகிறாள். அனிதா மேமின் அன்பான கற்பித்தல் முறை வெளிநாட்டு குடும்பங்களுக்கு சிறந்த வரம்!',
          highlightEn: 'Speaks Tamil with grandparents',
          highlightTa: 'தாத்தா பாட்டியுடன் தமிழில் பேச்சு',
        },
        {
          id: '3',
          name: 'அருண் பிரகாஷ்',
          relationEn: 'IT Professional (Adult Learner)',
          relationTa: 'மென்பொருள் பொறியாளர் (வயதுவந்தோர் வகுப்பு)',
          locationEn: 'Chromepet, Chennai',
          locationTa: 'குரோம்பேட்டை, சென்னை',
          rating: 5,
          tagEn: 'Spoken Tamil for Adults',
          tagTa: 'பேச்சுத் தமிழ் பயிற்சி',
          quoteEn:
            'I moved to Chennai for work and wanted to learn conversational Tamil. The 1-to-1 adult sessions were discreet and flexible. Within two months, I could chat easily with vendors and colleagues.',
          quoteTa:
            'வேலைக்காக சென்னை வந்த எனக்கு நடைமுறை பேச்சுத் தமிழ் கற்றுக்கொள்ள அனிதா மேமின் தனிநபர் வகுப்புகள் பேருதவியாக இருந்தன. 2 மாதத்தில் எளிதாகப் பேச முடிகிறது.',
          highlightEn: 'Conversational confidence in 8 weeks',
          highlightTa: '8 வாரங்களில் தயக்கமின்றி பேச்சு',
        },
        {
          id: '4',
          name: 'மீனாட்சி சுந்தரம்',
          relationEn: 'Mother of 9th Grade Student',
          relationTa: '9-ஆம் வகுப்பு மாணவியின் தாய்',
          locationEn: 'Tambaram, Chennai',
          locationTa: 'தாம்பரம், சென்னை',
          rating: 5,
          tagEn: 'Grammar & Seyyul Prep',
          tagTa: 'இலக்கணம் மற்றும் செய்யுள் பயிற்சி',
          quoteEn:
            'High school Tamil grammar was very challenging for my daughter. Nayali Academy’s weekly tests and custom worksheets made rules like Punarchi so simple. Her confidence has doubled!',
          quoteTa:
            'ஒன்பதாம் வகுப்பு தமிழ் இலக்கணம் கடினமாக இருந்தபோது, வாராந்திர பயிற்சித்தாள்கள் மூலம் மிக எளிமையாகப் புரிய வைத்தார்கள். பள்ளியில் முதன்மை மதிப்பெண்கள் பெற்றுள்ளாள்.',
          highlightEn: 'Doubled confidence in board grammar',
          highlightTa: 'இலக்கணத்தில் சிறந்த முன்னேற்றம்',
        },
      ] as Testimonial[],
    },
    pricing: {
      eyebrow: 'தெளிவான & நியாயமான கட்டணம்',
      title: 'எளிமையான பயிற்சித் திட்டங்கள்',
      subtitle:
        'தரமான தமிழ் கல்வி அனைவருக்கும் கிடைக்க வேண்டும். நடப்பு மாதக் கட்டணம் மற்றும் மாதிரி வகுப்புகளுக்கு நேரடியாகத் தொடர்பு கொள்ளவும்.',
      placeholderDisclaimer:
        'குறிப்பு: மாணவரின் வகுப்பு மற்றும் விருப்பத்திற்கேற்ப கட்டணம் நிர்ணயிக்கப்படுகிறது. "வாட்ஸ்அப்பில் விசாரிக்க" பொத்தானை அழுத்தவும்.',
      plans: [
        {
          id: 'group',
          nameEn: 'Group Tuition Batches',
          nameTa: 'குழு பயிற்சி வகுப்புகள்',
          badgeEn: 'Most Popular',
          badgeTa: 'அதிகம் விரும்பப்படுவது',
          descriptionEn: 'Small interactive groups (4–6 students) with peer motivation and structured syllabus coverage.',
          descriptionTa: '4 முதல் 6 மாணவர்கள் கொண்ட சிறிய குழுக்கள், சக மாணவர் ஊக்கம் மற்றும் முழு பாடத்திட்டப் பயிற்சி.',
          priceNoteEn: 'Affordable Monthly Fee • Contact for exact quote',
          priceNoteTa: 'குறைந்த மாதக் கட்டணம் • கட்டண விவரத்திற்கு தொடர்பு கொள்ளவும்',
          popular: true,
          features: [
            { textEn: '3 to 5 classes per week (1 hour each)', textTa: 'வாரத்திற்கு 3 முதல் 5 வகுப்புகள் (தலா 1 மணி நேரம்)' },
            { textEn: 'School textbook & syllabus alignment', textTa: 'பள்ளிப் பாடத்திட்டம் மற்றும் தேர்வு வழிகாட்டுதல்' },
            { textEn: 'Weekly reading & dictation tests', textTa: 'வாராந்திர வாசிப்பு மற்றும் சொல்வதை எழுதுதல் தேர்வு' },
            { textEn: 'Printed or digital worksheets included', textTa: 'பயிற்சித்தாள்கள் மற்றும் வீட்டுப்பாட உதவிகள்' },
            { textEn: 'Available both Offline in Pallavaram & Online', textTa: 'பல்லாவரம் மையம் மற்றும் இணையவழி இரண்டு வழிகளிலும்' },
          ],
        },
        {
          id: 'one-on-one',
          nameEn: '1-to-1 Personalized Coaching',
          nameTa: 'தனிநபர் பிரத்யேக பயிற்சி',
          badgeEn: 'Maximum Attention',
          badgeTa: 'முழு தனி கவனம்',
          descriptionEn: 'Dedicated one-on-one sessions for students needing intensive catch-up or accelerated learning.',
          descriptionTa: 'மாணவரின் தேவையை அறிந்து தனிப்பட்ட வேகத்தில் கற்பிக்கும் தீவிர பயிற்சி முறை.',
          priceNoteEn: 'Premium Personalized Fee • Contact for details',
          priceNoteTa: 'பிரத்யேக பயிற்சி கட்டணம் • விவரங்களை அறிய அணுகவும்',
          popular: false,
          features: [
            { textEn: '100% individual teacher attention', textTa: '100% தனி நபர் ஆசிரிய கவனிப்பு' },
            { textEn: 'Custom curriculum tailored to student’s weak areas', textTa: 'மாணவரின் பலவீனங்களை சரிசெய்யும் தனிப்பட்ட பாடத்திட்டம்' },
            { textEn: 'Flexible class timings (Morning / Evening)', textTa: 'நேரங்களை வசதிக்கேற்ப மாற்றிக்கொள்ளும் வசதி' },
            { textEn: 'Intensive handwriting stroke & spelling correction', textTa: 'எழுத்துப் பிழை மற்றும் கையெழுத்து சீரமைப்பு' },
            { textEn: 'Ideal for overseas kids & board exam students', textTa: 'வெளிநாட்டு குழந்தைகள் மற்றும் பொதுத்தேர்வு மாணவர்களுக்கு சிறந்தது' },
          ],
        },
        {
          id: 'adults',
          nameEn: 'Adult Spoken & Script Starter',
          nameTa: 'வயதுவந்தோர் பேச்சு மற்றும் எழுத்துத் தமிழ்',
          badgeEn: 'Flexible Timing',
          badgeTa: 'வசதியான நேரங்கள்',
          descriptionEn: 'Practical conversational Tamil designed for professionals, non-Tamil speakers, and cultural enthusiasts.',
          descriptionTa: 'வேலைவாய்ப்பு மற்றும் அன்றாட வாழ்க்கைக்காக தமிழைக் கற்றுக்கொள்ள விரும்பும் பெரியவர்களுக்கான சிறப்புப் பயிற்சி.',
          priceNoteEn: 'Flexible Modular Fee • Contact for schedule',
          priceNoteTa: 'மாதாந்திர / தொகுதி கட்டணம் • விவரங்களை அறியவும்',
          popular: false,
          features: [
            { textEn: 'Everyday conversational dialogues & vocabulary', textTa: 'அன்றாட பேச்சு வழக்கு மற்றும் உரையாடல் பயிற்சி' },
            { textEn: 'Zero prior knowledge required', textTa: 'முன் அனுபவம் ஏதுமின்றி ஆரம்ப நிலையிலிருந்து கற்பித்தல்' },
            { textEn: 'Discreet adult-friendly private or pair sessions', textTa: 'பெரியவர்களுக்கு ஏற்றவாறு எளிய முறையில் பயிற்சி' },
            { textEn: 'Optional Tamil sign-board & basic reading module', textTa: 'பெயர்ப்பலகைகள் மற்றும் எளிய செய்திகளை வாசிக்கும் பயிற்சி' },
            { textEn: 'Early morning & weekend slots available', textTa: 'காலை மற்றும் வார இறுதி நாட்கள் வகுப்புகள்' },
          ],
        },
      ] as PricingPlan[],
    },
    registration: {
      eyebrow: 'எளிதான முன்பதிவு',
      title: 'இலவச மாதிரி வகுப்பை இன்றே பதிவு செய்யுங்கள்',
      subtitle:
        'கீழே உள்ள படிவத்தைப் பூர்த்தி செய்யவும். சமர்ப்பிக்கும் போது, உங்கள் விவரங்கள் நேரடியாக வாட்ஸ்அப்பில் அனிதா மேமுக்கு அனுப்பப்படும்!',
      studentNameLabel: 'மாணவர் பெயர் *',
      studentNamePlaceholder: 'எ.கா: கவின் / அனன்யா',
      parentNameLabel: 'பெற்றோர் / பாதுகாவலர் பெயர்',
      parentNamePlaceholder: 'எ.கா: ரமேஷ் குமார்',
      ageLabel: 'வயது / படிக்கும் வகுப்பு *',
      agePlaceholder: 'எ.கா: 8 வயது (வகுப்பு 3) அல்லது பெரியவர்',
      phoneLabel: 'தொலைபேசி / வாட்ஸ்அப் எண் *',
      phonePlaceholder: 'எ.கா: +91 98765 43210',
      modeLabel: 'விருப்பமான பயிற்றுமுறை *',
      modes: {
        offline: 'நேரடி வகுப்பு (பல்லாவரம் மையம்)',
        online: 'நேரலை இணையவழி (ஜூம் / கூகுள் மீட்)',
        flexible: 'இரண்டும் சரி / வசதிக்கேற்ப',
      },
      levelLabel: 'தற்போதைய தமிழ் நிலை *',
      levels: {
        beginner: 'ஆரம்ப நிலை (எழுத்துக்கள் இன்னும் தெரியாது)',
        intermediate: 'எழுத்து தெரியும், வாசிக்க/எழுத கடினம்',
        school: 'பள்ளித் தேர்வு உதவி (அரசு / CBSE / ICSE)',
        spoken: 'பேச்சுத் தமிழ் மட்டும் (உரையாடல் கவனம்)',
      },
      timingLabel: 'விருப்பமான வகுப்பு நேரம்',
      timings: {
        morning: 'அதிகாலை (காலை 5:00 – 8:00)',
        evening: 'மாலை (மாலை 4:30 – இரவு 9:00)',
        weekend: 'வார இறுதி நாட்கள் மட்டும் (சனி / ஞாயிறு)',
      },
      notesLabel: 'கூடுதல் விவரங்கள் அல்லது பாடத்திட்டம்',
      notesPlaceholder: 'எ.கா: சி.பி.எஸ்.இ 4-ஆம் வகுப்பு, கையெழுத்து மற்றும் சொல்வதை எழுதுதலில் உதவி தேவை...',
      submitBtn: 'வாட்ஸ்அப் மூலம் இலவச டெமோவை உறுதி செய்க',
      submittingText: 'வாட்ஸ்அப் செய்தி தயாராகிறது...',
      guarantee: '🔒 மாதிரி வகுப்பிற்கு எந்தக் கட்டணமும் இல்லை. அனிதா மேமுடன் நேரடி உரையாடல்.',
      toastSuccess: 'உங்கள் இலவச டெமோ முன்பதிவை உறுதிசெய்ய வாட்ஸ்அப்பிற்கு திருப்பி விடப்படுகிறீர்கள்...',
    },
    visit: {
      eyebrow: 'எங்கள் இருப்பிடம்',
      title: 'பல்லாவரம் மையத்திற்கு வருகை தாருங்கள்',
      subtitle:
        'ஜமீன் பல்லாவரம் தர்கா சாலையில் அனைத்து வசதிகளுடன் அமைதியான சூழலில் அமைந்துள்ள எங்கள் மையம்.',
      addressCardTitle: 'பல்லாவரம் பயிற்சி மையம்',
      operatingHoursTitle: 'செயல்படும் நேரங்கள்',
      directionsBtn: 'கூகுள் மேப்பில் வழிகாட்டுதலைப் பெறுக',
      callBtn: 'நேரடியாக அழைக்க',
      whatsappBtn: 'வாட்ஸ்அப்பில் செய்தி அனுப்ப',
      amenities: [
        'பாதுகாப்பான மகளிர் வழிநடத்தும் அக்கம்பக்கத் tuition மையம்',
        'தமிழ் கதைப் புத்தகங்கள் மற்றும் பயிற்சித் தாள்கள் கொண்ட நூலகம்',
        'பல்லாவரம் ரயில் நிலையம் மற்றும் ஜிஎஸ்டி சாலைக்கு மிக அருகில்',
        'பள்ளி மாணவர்களுக்காக அதிகாலை 5:00 மணி முதல் வகுப்புகள்',
      ],
    },
    faq: {
      eyebrow: 'சந்தேகங்கள் உள்ளதா?',
      title: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      subtitle: 'பெற்றோர்களும் மாணவர்களும் எங்களிடம் பொதுவாகக் கேட்கும் கேள்விகளுக்கான தெளிவான பதில்கள்.',
      items: [
        {
          id: 'faq-1',
          questionEn: 'What is the right age for a child to start Tamil tuition?',
          questionTa: 'குழந்தைகளுக்கு எந்த வயதில் தமிழ் பயிற்சி தொடங்கலாம்?',
          answerEn:
            'Children as young as 4 to 5 years can start with our gentle pre-primary phonetic module, where they learn letter sounds through songs, drawings, and picture association. For school-going kids (Grades 1 to 10), we align directly with their school curriculum.',
          answerTa:
            '4 முதல் 5 வயது முதலே குழந்தைகள் எங்கள் ஒலிப்பு முறை மூலம் பாடல்கள் மற்றும் படங்கள் வாயிலாக எளிதாக தமிழ் கற்கத் தொடங்கலாம். பள்ளி செல்லும் மாணவர்களுக்கு அவர்களின் பள்ளிப் பாடத்திட்டத்திற்கு ஏற்ப பயிற்சி அளிக்கிறோம்.',
        },
        {
          id: 'faq-2',
          questionEn: 'How do the online classes work for overseas or out-of-station students?',
          questionTa: 'வெளிநாட்டு மற்றும் வெளியூர் மாணவர்களுக்கு இணையவழி வகுப்புகள் எவ்வாறு நடைபெறுகின்றன?',
          answerEn:
            'Online classes are conducted live via Google Meet or Zoom. We use digital whiteboards, stroke-by-stroke letter animations, and interactive reading decks. After each session, personalized printable PDF worksheets are sent via WhatsApp. Parents receive weekly audio/video feedback.',
          answerTa:
            'கூகுள் மீட் அல்லது ஜூம் மூலம் நேரலையாக வகுப்புகள் நடைபெறுகின்றன. டிஜிட்டல் திரையில் எழுத்துக்களை வரைந்து காட்டி, ஊடாடும் முறையில் கற்பிக்கப்படுகிறது. ஒவ்வொரு வகுப்பிற்குப் பிறகும் பயிற்சித்தாள்கள் வாட்ஸ்அப் மூலம் அனுப்பப்படும்.',
        },
        {
          id: 'faq-3',
          questionEn: 'Is the free demo class really free, and what happens during it?',
          questionTa: 'இலவச மாதிரி வகுப்பு உண்மையிலேயே இலவசமா? அதில் என்ன நடக்கும்?',
          answerEn:
            'Yes, the 30-minute demo class is 100% free with zero obligation. During the demo, Anitha Mam assesses the student’s current Tamil reading, writing, or speaking comfort level, demonstrates our fun teaching method, and suggests a customized learning plan.',
          answerTa:
            'ஆம், 30 நிமிட மாதிரி வகுப்பு முற்றிலும் இலவசம். இதில் ஆசிரியையான அனிதா மேம் மாணவரின் தற்போதைய வாசிப்பு மற்றும் எழுத்து நிலையை கனிவுடன் மதிப்பிட்டு, அவர்களுக்கு ஏற்ற கற்றல் திட்டத்தை பரிந்துரைப்பார்.',
        },
        {
          id: 'faq-4',
          questionEn: 'What is the student-to-teacher ratio in group batches?',
          questionTa: 'குழு வகுப்புகளில் எத்தனை மாணவர்கள் இருப்பார்கள்?',
          answerEn:
            'To maintain genuine personal attention, our group batches never exceed 4 to 6 students. Every child gets dedicated time to read aloud, have their handwriting reviewed, and ask questions without hesitation.',
          answerTa:
            'ஒவ்வொரு மாணவருக்கும் முழு கவனம் கிடைக்க வேண்டும் என்பதற்காக, ஒரு குழுவில் அதிகபட்சமாக 4 முதல் 6 மாணவர்கள் மட்டுமே சேர்க்கப்படுகிறார்கள்.',
        },
        {
          id: 'faq-5',
          questionEn: 'Do you provide study materials and handwriting worksheets?',
          questionTa: 'பயிற்சிப் புத்தகங்கள் மற்றும் கையெழுத்துப் பயிற்சித்தாள்கள் வழங்கப்படுமா?',
          answerEn:
            'Yes! We provide structured Tamil letter tracing sheets, custom grammar rule summaries, vocabulary charts, and weekly dictation lists. Physical printouts are provided for offline students, and high-res printable PDFs are shared for online students.',
          answerTa:
            'ஆம்! தமிழ் எழுத்து வரிவடிவப் பயிற்சித் தாள்கள், இலக்கணக் குறிப்புகள் மற்றும் வாராந்திர பயிற்சித் தாள்கள் அனைத்து மாணவர்களுக்கும் பிரத்யேகமாக வழங்கப்படுகின்றன.',
        },
        {
          id: 'faq-6',
          questionEn: 'Why do you offer early morning batches starting at 5:00 AM?',
          questionTa: 'காலை 5:00 மணி முதல் வகுப்புகள் தொடங்குவது ஏன்?',
          answerEn:
            'Many school children have packed evening routines with school homework and sports. An early morning 5:00 AM or 6:00 AM session allows students to study Tamil with a fresh mind before school starts, without evening fatigue.',
          answerTa:
            'மாலை நேரங்களில் வீட்டுப்பாடம் மற்றும் விளையாட்டு இருப்பதால், அதிகாலை 5:00 மற்றும் 6:00 மணி வகுப்புகள் புத்துணர்ச்சியோடு எளிதில் மனனம் செய்ய குழந்தைகளுக்கு பெரிதும் உதவுகின்றன.',
        },
        {
          id: 'faq-7',
          questionEn: 'Can adults with zero Tamil background join to learn spoken Tamil?',
          questionTa: 'தமிழ் சிறிதும் தெரியாத பெரியவர்கள் பேச்சுத் தமிழ் கற்றுக்கொள்ள முடியுமா?',
          answerEn:
            'Absolutely! We run special private modules for working professionals, doctors, engineers, and homemakers who have moved to Tamil Nadu. We teach practical conversational phrases, daily shopping vocabulary, and polite interactions without any pressure to memorize the script unless you want to.',
          answerTa:
            'நிச்சயமாக! சென்னைக்கு பணி நிமித்தமாக வந்த பிற மாநிலத்தவர்கள் மற்றும் வெளிநாட்டினருக்கு, அன்றாட வாழ்க்கைக்குத் தேவையான எளிய பேச்சுத் தமிழ் பயிற்சி தனியாக வழங்கப்படுகிறது.',
        },
      ] as FaqItem[],
    },
    footer: {
      aboutTitle: 'நயலி தமிழ் அகாடமி',
      aboutDesc:
        'பல்லாவரத்தில் மகளிர் வழிநடத்தும் முதன்மையான தமிழ் கல்விக்கூடம். செம்மொழித் தமிழை எளிய, மகிழ்ச்சியான வழியில் அடுத்த தலைமுறைக்குக் கொண்டு சேர்க்கிறோம்.',
      proverb: '“யாதும் ஊரே யாவரும் கேளிர்” — கணியன் பூங்குன்றனார்',
      quickLinksTitle: 'விரைவு இணைப்புகள்',
      contactTitle: 'நேரடித் தொடர்பு',
      copyright: '© 2026 நயலி தமிழ் அகாடமி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      credit: 'மாதிரி வலைத்தள வடிவமைப்பு: பிரணவேஷ் என் (pranaveshn.vercel.app)',
    },
  },
};
