// Real PDF Data - Gujarat Police & Technical Operator Exams
const pdfData = [
    {
        id: 1,
        title: "OJAS TRB 2021-22 Notification - Technical Operator Recruitment",
        description: "Official Gujarat OJAS TRB notification for 2021-22 Technical Operator (Class-3) recruitment exam. Complete recruitment details, eligibility criteria, exam pattern, syllabus, and application information from Gujarat Police Technical Recruitment Board (TRB), Gandhinagar.",
        category: "technical-operator",
        thumbnail: "https://via.placeholder.com/400x300/2563eb/ffffff?text=OJAS+TRB+Notification",
        size: "1.2 MB",
        pages: 28,
        driveLink: "https://ojas.gujarat.gov.in/AdvtDetailFiles/TRB_202122_1.pdf"
    },
    {
        id: 2,
        title: "Gujarat PSI Wireless Question Paper 2022 - Actual Exam",
        description: "Original Gujarat Police PSI Wireless exam question paper from 2022. Actual exam questions with multiple choice options. Practice with real exam questions to understand exam pattern, difficulty level, and question types for PSI Wireless recruitment exam.",
        category: "psi-wireless",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=PSI+Wireless+2022+Paper",
        size: "0.8 MB",
        pages: 18,
        driveLink: "https://drive.google.com/uc?export=download&id=1gq5aIGPhiQJR3GqUleyh4I9leAwToFU7"
    },
    {
        id: 3,
        title: "2022 Answer Key - Technical Bharti Board Gandhinagar",
        description: "Official answer key for 2022 Technical Bharti Board (તેક્નીકલ ભરતી બોર્ડ, ગાંધીનગર) examination. Contains correct answers for all questions from 2022 exam. Verify your answers, calculate marks, and understand solution approach for better exam preparation and result calculation.",
        category: "old-papers",
        thumbnail: "https://via.placeholder.com/400x300/2563eb/ffffff?text=Answer+Key+2022",
        size: "0.6 MB",
        pages: 12,
        driveLink: "https://ojas.gujarat.gov.in/ojas1/AdvtDetailFiles/107796659_Notification6.pdf"
    },
    {
        id: 4,
        title: "Computer Basics - Complete Guide",
        description: "Comprehensive computer basics tutorial covering computer fundamentals, hardware, software, operating systems, and essential computer skills for beginners. Perfect for competitive exam preparation.",
        category: "gk-pdf",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Computer+Basics",
        size: "2.5 MB",
        pages: 45,
        driveLink: "https://www.vfu.bg/en/e-Learning/Computer-Basics--computer_basics2.pdf"
    },
    {
        id: 5,
        title: "Technical Operator Recruitment Rules 2024",
        description: "Official Technical Operator recruitment rules and regulations for 2024. Contains detailed guidelines, eligibility criteria, selection process, and rules for Technical Operator position in Gujarat Police Technical Recruitment Board.",
        category: "technical-operator",
        thumbnail: "https://via.placeholder.com/400x300/2563eb/ffffff?text=TO+Rules+2024",
        size: "1.5 MB",
        pages: 35,
        driveLink: "https://drive.google.com/uc?export=download&id=14ofpmqxeLxZ2Rb5CWT3du6VMJ7HQt_34"
    },
    {
        id: 6,
        title: "ગુજરાતી વ્યાકરણ - Gujarati Grammar",
        description: "Complete Gujarati grammar guide (ગુજરાતી વ્યાકરણ) covering all grammar rules, sentence structure, and language fundamentals. Essential for Gujarati language examination preparation.",
        category: "gujarati-grammar",
        thumbnail: "https://via.placeholder.com/400x300/2563eb/ffffff?text=Gujarati+Grammar",
        size: "1.8 MB",
        pages: 32,
        driveLink: "https://share.google/6psa9h8ErA4SdOz2k"
    },
    {
        id: 7,
        title: "English Grammar - Tense Complete Guide",
        description: "Comprehensive guide on English Tense covering all 12 tenses with rules, examples, and practice exercises. Master tense concepts for English grammar examination.",
        category: "english-grammar",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=English+Tense",
        size: "0.8 MB",
        pages: 18,
        driveLink: "https://drive.google.com/uc?export=download&id=1ICoI-v6RS_uveoEDR5jI5BNyX4D0RCut"
    },
    {
        id: 8,
        title: "English Grammar - Articles (A, An, The)",
        description: "Detailed guide on English articles (a, an, the) with rules, usage patterns, and practical examples. Essential for mastering article usage in English grammar.",
        category: "english-grammar",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Articles",
        size: "0.5 MB",
        pages: 12,
        driveLink: "https://www.scribd.com/document/109253537/English-grammar-Article-a-an-the"
    },
    {
        id: 9,
        title: "English Grammar - Prepositions Guide",
        description: "Complete reference guide for English prepositions with detailed explanations, examples, and usage rules. Master all types of prepositions for competitive exams.",
        category: "english-grammar",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Prepositions",
        size: "0.7 MB",
        pages: 20,
        driveLink: "https://www.uvic.ca/learningandteaching/cac/assets/docs/Prepositions%20Final.pdf"
    },
    {
        id: 10,
        title: "English Grammar - Active and Passive Voice",
        description: "Comprehensive guide on active and passive voice conversion with rules, examples, and practice questions. Learn to transform sentences between active and passive voice.",
        category: "english-grammar",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Active+Passive",
        size: "0.6 MB",
        pages: 15,
        driveLink: "https://www.jsscacs.edu.in/sites/default/files/Department%20Files/Active%20and%20passive%20voice.pdf"
    },
    {
        id: 11,
        title: "English Grammar - Direct and Indirect Speech",
        description: "Detailed guide on direct and indirect speech (reported speech) with conversion rules, examples, and practice exercises. Master narration conversion for exams.",
        category: "english-grammar",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Direct+Indirect",
        size: "0.7 MB",
        pages: 18,
        driveLink: "https://learningatb104.wordpress.com/wp-content/uploads/2018/10/indirect-speech-rules.pdf"
    },
    {
        id: 12,
        title: "English Vocabulary - PET Vocabulary List",
        description: "Cambridge English Preliminary (PET) vocabulary list with 1500+ essential English words. Comprehensive vocabulary resource for improving English language skills.",
        category: "english-grammar",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Vocabulary",
        size: "1.2 MB",
        pages: 25,
        driveLink: "https://www.cambridgeenglish.org/images/84669-pet-vocabulary-list.pdf"
    },
    {
        id: 13,
        title: "Synonyms and Antonyms - Complete List",
        description: "Comprehensive list of synonyms and antonyms with 500+ word pairs. Essential vocabulary resource for competitive exams, word usage, and language enrichment.",
        category: "english-grammar",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Synonyms",
        size: "0.9 MB",
        pages: 20,
        driveLink: "https://cdn1.byjus.com/wp-content/uploads/2020/06/Synonyms-and-Antonyms-List.pdf"
    },
    {
        id: 14,
        title: "Number System - Aptitude Fundamentals",
        description: "Complete guide on number system covering integers, fractions, decimals, and number properties. Essential aptitude topic for competitive exams with solved examples and practice problems.",
        category: "reasoning",
        thumbnail: "https://via.placeholder.com/400x300/2563eb/ffffff?text=Number+System",
        size: "1.1 MB",
        pages: 24,
        driveLink: "https://www.ipsgwalior.org/download/number%20system.pdf"
    },
    {
        id: 15,
        title: "Maths & Reasoning - Gujarati Edition",
        description: "Comprehensive mathematics and reasoning guide in Gujarati (ગુજરાતી). Complete coverage of aptitude topics including ratio, profit-loss, percentage, time-distance, and reasoning for Gujarat Police exams.",
        category: "maths",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Maths+Reasoning",
        size: "2.8 MB",
        pages: 52,
        driveLink: "https://brijeshsathvara.wordpress.com/wp-content/uploads/2019/02/maths-and-reasoning-pdf-in-gujarati-by-anamika-academy.pdf"
    },
    {
        id: 16,
        title: "General Knowledge - Questions with Answers",
        description: "Comprehensive collection of general knowledge questions with answers in Gujarati. Contains most important GK questions for GPSC and competitive exams with detailed answers.",
        category: "gk-pdf",
        thumbnail: "https://via.placeholder.com/400x300/2563eb/ffffff?text=GK+Questions",
        size: "1.9 MB",
        pages: 38,
        driveLink: "https://www.scribd.com/doc/253260319/General-knowledge-Questions-with-Answers-in-gujarati-Most-imp-gk-questions-with-answers-in-gujarati-CRACK-GPSC-pdf"
    },
    {
        id: 17,
        title: "MODULE–1: Electronics Components, Devices & Circuits",
        description: "Complete electronics fundamentals covering conductors, insulators, semiconductors, diodes, BJT transistors, biasing, amplifiers, oscillators, power supply, FET, and IC basics. Essential technical knowledge for Technical Operator recruitment exam.",
        category: "technical-operator",
        thumbnail: "https://via.placeholder.com/400x300/2563eb/ffffff?text=Electronics+Circuits",
        size: "1.6 MB",
        pages: 42,
        driveLink: "https://www.elenco.com/wp-content/uploads/2017/10/ECK-10_REV-O-2.pdf"
    },
    {
        id: 18,
        title: "Logic Gates - Digital Electronics Fundamentals",
        description: "Comprehensive guide on logic gates covering AND, OR, NOT, NAND, NOR, XOR, and XNOR gates with truth tables and applications. Essential for understanding digital circuits and VLSI design.",
        category: "technical-operator",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Logic+Gates",
        size: "0.9 MB",
        pages: 18,
        driveLink: "https://www.bu.edu/lernet/artemis/years/2011/slides/logicgates.pdf"
    },
    {
        id: 19,
        title: "Boolean Algebra & Logic Gates - MCQ Objective Questions",
        description: "Comprehensive collection of multiple choice questions on Boolean algebra and logic gates with detailed answers. Perfect for competitive exam preparation and self-assessment.",
        category: "technical-operator",
        thumbnail: "https://via.placeholder.com/400x300/2563eb/ffffff?text=Boolean+Algebra",
        size: "1.3 MB",
        pages: 28,
        driveLink: "https://sewab.org/page_list_study_mat/uploads/46.pdf"
    },
    {
        id: 20,
        title: "MODULE–2: Digital Electronics & VLSI",
        description: "Complete digital electronics and VLSI design course covering number systems, logic gates, boolean algebra, combinational circuits (adders, multiplexers, decoders), sequential circuits (flip-flops, counters, registers), PLA, ADC/DAC, MOS transistors, VLSI basics, FPGA, and VHDL introduction.",
        category: "technical-operator",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Digital+VLSI",
        size: "2.1 MB",
        pages: 56,
        driveLink: "https://sewab.org/page_list_study_mat/uploads/46.pdf"
    },
    {
        id: 21,
        title: "MODULE–3: Electronics Networks & Instruments",
        description: "Comprehensive networks and instrumentation module covering network theorems, resonance, filters, attenuators, transmission lines, bridges, CRO, signal generators, and transducers. Includes basic instrumentation reference for practical measurements.",
        category: "technical-operator",
        thumbnail: "https://via.placeholder.com/400x300/2563eb/ffffff?text=Networks+Instruments",
        size: "1.4 MB",
        pages: 48,
        driveLink: "https://web.mst.edu/~cottrell/me240/resources/basic_inst/Basic_Instrumentation.pdf"
    },
    {
        id: 22,
        title: "MODULE–4: Communication Engineering",
        description: "Complete communication engineering module covering AM, FM, PM, receivers, antennas, wave propagation, SSB, pulse modulation, PCM, multiplexing, telephone networks, and space/time switching.",
        category: "technical-operator",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Communication+Engg",
        size: "3.2 MB",
        pages: 82,
        driveLink: "https://dsengg.ac.in/eee/07%20COMMUNICATION%20ENGINEERING%20.pdf"
    },
    {
        id: 23,
        title: "AM / FM / PM Modulation Basics",
        description: "Detailed guide on amplitude, frequency, and phase modulation with mathematical foundations, waveforms, and practical applications for communication systems.",
        category: "technical-operator",
        thumbnail: "https://via.placeholder.com/400x300/2563eb/ffffff?text=AM+FM+PM",
        size: "1.1 MB",
        pages: 34,
        driveLink: "https://www.bharathuniv.ac.in/page_images/pdf/AM,-PM-and-FM-modulation-Gomathi.pdf"
    },
    {
        id: 24,
        title: "Telephone Networks & Switching",
        description: "Introduction to telephone networks, switching (space/time), multiplexing concepts, and network architectures for communication systems.",
        category: "technical-operator",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Telephone+Networks",
        size: "0.9 MB",
        pages: 22,
        driveLink: "https://personal.utdallas.edu/~torlak/courses/ee4367/lectures/lecture1.pdf"
    },
    {
        id: 25,
        title: "Electrical Materials and Components - Notes & MCQs",
        description: "Detailed notes and MCQs on electrical materials and components covering conductors, insulators, semiconductors, cables, transformers, switchgear, and practical component selection for technical exams.",
        category: "technical-operator",
        thumbnail: "https://via.placeholder.com/400x300/2563eb/ffffff?text=Electrical+Materials",
        size: "2.4 MB",
        pages: 60,
        driveLink: "https://drive.google.com/uc?export=download&id=1xYixyt8rTK9nawQth4S4_K1xUBfr1mqO"
    },
    {
        id: 26,
        title: "Maths (ગણિત) - Competitive Exam Guide",
        description: "Gujarati medium mathematics guide (ગણિત) with aptitude topics, formulas, and solved examples tailored for competitive exams and police recruitment tests.",
        category: "maths",
        thumbnail: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Gujarati+Maths",
        size: "3.0 MB",
        pages: 72,
        driveLink: "https://drive.google.com/uc?export=download&id=1hF0AB7qpOaGhUyVw7HuTf5ELmjx8WPnq"
    },
    {
        id: 27,
        title: "Reasoning - Maths Practice Guide",
        description: "Reasoning and quantitative aptitude practice guide with mixed maths reasoning problems, shortcuts, and solved examples for competitive exams.",
        category: "reasoning",
        thumbnail: "https://via.placeholder.com/400x300/2563eb/ffffff?text=Reasoning+Maths",
        size: "2.2 MB",
        pages: 58,
        driveLink: "https://drive.google.com/uc?export=download&id=1D6Nexd5kZwx939-G6YQGT03DHHzgYGB1"
    }
];

let currentCategory = 'all';
let searchQuery = '';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderPDFCards(pdfData);
    setupEventListeners();
    setupBackToTop();
});

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Category filter
    const categoryPills = document.querySelectorAll('.category-pill');
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Remove active class from all pills
            categoryPills.forEach(p => p.classList.remove('active'));
            // Add active class to clicked pill
            pill.classList.add('active');
            
            currentCategory = pill.getAttribute('data-category');
            filterPDFs();
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        filterPDFs();
    });
}

// Filter PDFs based on category and search
function filterPDFs() {
    let filteredData = pdfData;

    // Filter by category
    if (currentCategory !== 'all') {
        filteredData = filteredData.filter(pdf => pdf.category === currentCategory);
    }

    // Filter by search query
    if (searchQuery) {
        filteredData = filteredData.filter(pdf => 
            pdf.title.toLowerCase().includes(searchQuery) ||
            pdf.description.toLowerCase().includes(searchQuery) ||
            pdf.category.toLowerCase().includes(searchQuery)
        );
    }

    renderPDFCards(filteredData);
}

// Render PDF Cards
function renderPDFCards(pdfs) {
    const container = document.getElementById('pdfCardsContainer');
    const noResults = document.getElementById('noResults');

    if (pdfs.length === 0) {
        container.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');

    const cardsHTML = pdfs.map(pdf => `
        <div class="pdf-card bg-white rounded-2xl shadow-md overflow-hidden" data-id="${pdf.id}">
            <div class="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                    <i class="fas fa-file-pdf text-white text-6xl opacity-80"></i>
                </div>
            </div>
            
            <div class="p-6">
                <div class="mb-2">
                    <span class="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                        ${formatCategory(pdf.category)}
                    </span>
                </div>
                
                <h3 class="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    ${pdf.title}
                </h3>
                
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                    ${pdf.description}
                </p>
                
                <div class="flex items-center justify-end text-xs text-gray-500 mb-4">
                    <span><i class="fas fa-download mr-1"></i> Free</span>
                </div>
                
                <div class="flex space-x-3">
                    <button onclick="viewPDF(${pdf.id})" class="flex-1 btn-primary text-white font-medium py-3 rounded-xl">
                        <i class="fas fa-eye mr-2"></i>View PDF
                    </button>
                    <button onclick="showDetails(${pdf.id})" class="btn-outline font-medium px-6 py-3 rounded-xl">
                        Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = cardsHTML;
}

// Format category name
function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// View PDF function
function viewPDF(id) {
    const pdf = pdfData.find(p => p.id === id);
    if (pdf) {
        // In a real application, this would open the actual PDF
        window.open(pdf.driveLink, '_blank');
    }
}

// Show Details function
function showDetails(id) {
    const pdf = pdfData.find(p => p.id === id);
    if (pdf) {
        // Store selected PDF in sessionStorage
        sessionStorage.setItem('selectedPDF', JSON.stringify(pdf));
        // Navigate to details page
        window.location.href = 'details.html';
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back to Top Button functionality
function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}