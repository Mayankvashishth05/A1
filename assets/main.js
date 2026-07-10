
        // Initialize Lucide Icons
        lucide.createIcons();

        // ------------------------------
        // Data Configuration
        // ------------------------------
        
        const servicesData = [
            { icon: 'megaphone', title: 'Advertisements', price: 'Rs 299–499+', desc: 'Professionally designed advertisements that combine compelling visuals with strategic layouts to maximize engagement and conversions.' },
            { icon: 'layout-template', title: 'Brand Kits', price: 'Rs 999–1499+', desc: 'Comprehensive brand identity packages including logos, color palettes, typography, and visual guidelines.' },
            { icon: 'image', title: 'Banners', price: 'Rs 399–599+', desc: 'Create eye-catching banners for digital and print campaigns.' },
            { icon: 'newspaper', title: 'Posters', price: 'Rs 299–499+', desc: 'High-impact promotional poster designs.' },
            { icon: 'smartphone', title: 'Social Media Creatives', price: 'Rs 249–449+', desc: 'Platform optimized social media graphics.' },
            { icon: 'contact', title: 'Visiting Cards', price: 'Rs 299–499+', desc: 'Elegant business card designs.' },
            { icon: 'pen-tool', title: 'Logos', price: 'Rs 499–999+', desc: 'Unique, memorable and versatile logo designs.' }
        ];

        const portfolioData = [
            { title: "Burger Promotion Poster", category: "Poster Design", img: "assets/portfolio/Burger.webp", desc: "A vibrant and appetizing poster created for a local burger joint's weekend promotion." },
            { title: "boAt Watch", category: "Advertisement", img: "assets/portfolio/Boat.webp", desc: "Speculative ad concept highlighting the sleek design of a modern smartwatch." },
            { title: "Mamaearth Facewash Poster", category: "Social Media", img: "assets/portfolio/Mamaearth.webp", desc: "Clean and nature-inspired promotional graphic for organic skincare products." },
            { title: "Dairy Milk Ad Spoof", category: "Concept Art", img: "assets/portfolio/Silk Oreo.webp", desc: "A fun, fan-made conceptual advertisement bringing a nostalgic twist to chocolate branding." },
            { title: "Spoof Serum Poster", category: "Advertisement", img: "assets/portfolio/Serum.webp", desc: "Minimalist and luxurious product showcase for a conceptual beauty serum." },
            { title: "Business Card", category: "Brand Kit", img: "assets/portfolio/Business Card.webp", desc: "Premium textured business card design for corporate executives." },
            { title: "Buds", category: "Product Render", img: "assets/portfolio/Buds.webp", desc: "High-contrast promotional visual for wireless earbuds targeting audiophiles." },
           { title: "Headphones", category: "Advertisement", img: "assets/portfolio/Headphones.webp", desc: "High-contrast promotional visual for Gaming RGB Headphones targeting Gamers." }
        ];

        const faqData = [
            { q: "What is your typical turnaround time?", a: "Turnaround times vary by project. Standard social media creatives take 1-2 days, while complete brand kits can take 7-10 business days." },
            { q: "Do you provide source files?", a: "Yes, source files are included in our Premium packages and can be purchased as an add-on for other packages." },
            { q: "What is your revision policy?", a: "We typically offer 2-3 rounds of revisions depending on the package you choose to ensure you are completely satisfied with the final design." },
            { q: "How do we get started?", a: "Simply fill out the contact form with your project details, and we'll schedule a brief discovery call or reach out via email to finalize the scope." },
            { q: "Do you require a deposit?", a: "Yes, we require a 50% upfront deposit to commence work, with the remaining balance due upon final project delivery." },
            { q: "Are the prices negotiable?", a: "Our package prices are fixed to ensure premium quality. However, for large custom projects, we can discuss a tailored pricing structure." },
            { q: "What software do you use?", a: "We primarily use industry-standard tools like Adobe Photoshop, Illustrator, After Effects, and Figma." },
            { q: "Can you print the designs as well?", a: "Currently, we operate purely as a digital design studio. We provide print-ready files (CMYK, high-resolution PDFs) that you can take to any local or online printer." },
            { q: "Do you offer website design?", a: "While our core focus is graphic branding, we do offer UI/UX web design as custom projects. Please select 'Custom Project' in the contact form to discuss." },
            { q: "Who owns the copyright to the final designs?", a: "Upon final payment, full copyright ownership of the final approved designs is transferred to you." },
            { q: "Can I upgrade my package later?", a: "Absolutely. If you start with a Starter package and realize you need more assets, we can easily upgrade you to Business or Premium." },
            { q: "Do you design in languages other than English?", a: "Yes, provided you supply the translated text, we can design layouts that accommodate various languages and scripts." }
        ];

        const testimonialsData = [
            { name: "Bhuvnesh Pasrija", role: "Founder, Maurwin", text: "Hi everyone, Yesterday (20/09/2025) we talked with Mr. Mayank for our logo work. From yesterday night he starts doing working on logo work with all the details we provided to him. When the outcome comes in front of us is really very impressive. He is really very Hard working and passionate about his work. Keep it up 👍", rating: 5 },
            { name: "Priya Sharma", role: "Independent", text: "Perfect work ; amazing studio and extraordinary team!! Extremely happy with their service 💯 ", rating: 5 },
            { name: "Arjit Sharma", role: "Brand Operator", text: "Honestly, working with Niorpixel was a really smooth experience. I didn’t have to explain things again and again—they understood what I wanted pretty quickly. The final design looked clean and professional. Would definitely work with them again.", rating: 5 },
            { name: "Ronit Rathee", role: "Influencer", text: "Great work and with a good creative mindset. Person is very creative and trusted everyone should use this to create a better design and creativity. I like the work. Person is very hardworking and very trusted and a good knowledge about the work. Everyone should use this firm to make their creative mind in reality.", rating: 5 }
        ];

        // ------------------------------
        // Rendering Data
        // ------------------------------

        // Render Services
        const servicesContainer = document.getElementById('services-container');
        servicesData.forEach((service, index) => {
            const delay = index % 2 === 0 ? '' : 'stagger-1';
            servicesContainer.innerHTML += `
                <div class="glass p-8 rounded-3xl reveal ${delay} card-hover flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div class="w-16 h-16 rounded-2xl bg-nior-card border border-nior-border flex-shrink-0 flex items-center justify-center text-nior-cyan">
                        <i data-lucide="${service.icon}" class="w-8 h-8"></i>
                    </div>
                    <div class="flex-grow">
                        <h3 class="text-2xl font-bold font-heading mb-2">${service.title}</h3>
                        <p class="text-nior-textMuted">${service.desc}</p>
                    </div>
                    <div class="flex-shrink-0 text-left md:text-right mt-4 md:mt-0 min-w-[150px]">
                        <div class="text-lg font-bold text-nior-purple mb-2">${service.price}</div>
                        <button onclick="navigate('contact', '${service.title}')" class="btn-outline px-6 py-2 rounded-lg text-sm w-full">Request Quote</button>
                    </div>
                </div>
            `;
        });

        // Render Portfolio
        const portfolioGrid = document.getElementById('portfolio-grid');
        portfolioData.forEach((item, index) => {
            const delay = index % 3 === 0 ? '' : (index % 3 === 1 ? 'stagger-1' : 'stagger-2');
            portfolioGrid.innerHTML += `
                <div class="group relative rounded-3xl overflow-hidden reveal ${delay} cursor-pointer shadow-lg" onclick="openModal(${index})">
                    <div class="aspect-w-4 aspect-h-5 w-full bg-nior-card">
                        <img src="${item.img}" alt="${item.title}" loading="lazy" class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-nior-bg/90 via-nior-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span class="text-nior-cyan text-sm font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">${item.category}</span>
                        <h3 class="text-xl font-bold font-heading transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 text-white">${item.title}</h3>
                    </div>
                </div>
            `;
        });

        // Render FAQs
        const faqContainer = document.getElementById('faq-container');
        faqData.forEach((faq, index) => {
            faqContainer.innerHTML += `
                <div class="faq-item glass rounded-xl border border-nior-border overflow-hidden">
                    <button class="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
                        <span class="font-bold font-heading text-lg">${faq.q}</span>
                        <i data-lucide="plus" class="faq-icon w-5 h-5 text-nior-textMuted transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer px-6 bg-nior-card/50">
                        <p class="text-nior-textMuted">${faq.a}</p>
                    </div>
                </div>
            `;
        });

        // Render Testimonials
        const testimonialsGrid = document.getElementById('testimonials-grid');
        testimonialsData.forEach((test, index) => {
            const delay = index % 2 === 0 ? '' : 'stagger-1';
            testimonialsGrid.innerHTML += `
                <div class="glass p-8 rounded-3xl reveal ${delay} relative">
                    <i data-lucide="quote" class="absolute top-6 right-6 w-10 h-10 text-nior-border opacity-50"></i>
                    <div class="flex gap-1 text-nior-purple mb-4">
                        ${'<i data-lucide="star" class="w-5 h-5 fill-current"></i>'.repeat(test.rating)}
                    </div>
                    <p class="text-lg text-nior-textMuted mb-6 italic">"${test.text}"</p>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-nior-border flex items-center justify-center font-bold text-xl">
                            ${test.name.charAt(0)}
                        </div>
                        <div>
                            <h4 class="font-bold font-heading">${test.name}</h4>
                            <p class="text-sm text-nior-cyan">${test.role}</p>
                        </div>
                    </div>
                </div>
            `;
        });

        // Re-initialize icons for dynamic content
        lucide.createIcons();


        // ------------------------------
        // Application Logic (SPA Routing)
        // ------------------------------
        
        function updateRoute() {
            let hash = window.location.hash.substring(1);
            if(!hash || !document.getElementById(`page-${hash}`)) {
                hash = 'home';
            }
            
            // Hide all pages
            document.querySelectorAll('.page-view').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show target page
            document.getElementById(`page-${hash}`).classList.add('active');

            // Update Nav Links
            document.querySelectorAll('.nav-link').forEach(link => {
                if(link.getAttribute('data-target') === hash) {
                    link.classList.add('text-nior-cyan');
                    link.classList.remove('text-nior-text');
                } else {
                    link.classList.remove('text-nior-cyan');
                    link.classList.add('text-nior-text');
                }
            });

            // Close Mobile Menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if(mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Re-trigger reveal animations for the new page
            setTimeout(handleScroll, 100);
        }

        function navigate(pageId, servicePreselect = null) {
            // Pre-select service in contact form if passed
            if (pageId === 'contact' && servicePreselect) {
                const select = document.getElementById('service-select');
                if(select) {
                    for(let i=0; i<select.options.length; i++) {
                        if(select.options[i].value === servicePreselect) {
                            select.selectedIndex = i;
                            break;
                        }
                    }
                }
            }

            // Update URL Hash to trigger route change, or just scroll top if already there
            if (window.location.hash !== '#' + pageId) {
                window.location.hash = pageId;
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Handle initial load and browser back/forward buttons
        window.addEventListener('load', updateRoute);
        window.addEventListener('hashchange', updateRoute);

        // Mobile Menu Toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('glass-header');
                nav.classList.remove('bg-transparent');
            } else {
                nav.classList.remove('glass-header');
                nav.classList.add('bg-transparent');
            }
        });

        // Scroll Reveal Animation
        function handleScroll() {
            const reveals = document.querySelectorAll('.page-view.active .reveal');
            const windowHeight = window.innerHeight;
            
            reveals.forEach(reveal => {
                const elementTop = reveal.getBoundingClientRect().top;
                const elementVisible = 100; // Trigger threshold
                
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        }
        window.addEventListener('scroll', handleScroll);
        // Initial trigger
        setTimeout(handleScroll, 200);

/* ===========================
      OFFER COUNTDOWN
=========================== */

const offerEndDate = new Date("December 31, 2026 23:59:59").getTime();

const countdown = setInterval(function(){

const now = new Date().getTime();

const distance = offerEndDate - now;

if(distance < 0){

clearInterval(countdown);

document.querySelector(".countdown").innerHTML =
"<h3 style='color:#2CC3E6'>Offer Expired</h3>";

return;

}

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").textContent =
String(days).padStart(2,"0");

document.getElementById("hours").textContent =
String(hours).padStart(2,"0");

document.getElementById("minutes").textContent =
String(minutes).padStart(2,"0");

document.getElementById("seconds").textContent =
String(seconds).padStart(2,"0");

},1000);

        // ------------------------------
        // Interactions (Modal, FAQ, Form)
        // ------------------------------

        // Modal Logic
        let currentModalIndex = 0;
        const modal = document.getElementById('portfolio-modal');
        const modalImg = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');

        function openModal(index) {
            currentModalIndex = index;
            updateModalContent();
            modal.classList.remove('hidden');
            document.body.classList.add('modal-open');
            // Slight delay for zoom effect
            setTimeout(() => {
                modalImg.classList.remove('scale-95');
                modalImg.classList.add('scale-100');
            }, 10);
        }

        function closeModal() {
            modalImg.classList.remove('scale-100');
            modalImg.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.classList.remove('modal-open');
            }, 300);
        }

        function changeModalImage(step) {
            currentModalIndex += step;
            if (currentModalIndex >= portfolioData.length) currentModalIndex = 0;
            if (currentModalIndex < 0) currentModalIndex = portfolioData.length - 1;
            
            // Fade out brief
            modalImg.style.opacity = 0;
            setTimeout(() => {
                updateModalContent();
                modalImg.style.opacity = 1;
            }, 200);
        }

        function updateModalContent() {
            const data = portfolioData[currentModalIndex];
            modalImg.src = data.img;
            modalTitle.innerText = data.title;
            modalDesc.innerText = data.desc;
        }

        // Keyboard navigation for modal
        document.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('hidden')) {
                if (e.key === 'Escape') closeModal();
                if (e.key === 'ArrowRight') changeModalImage(1);
                if (e.key === 'ArrowLeft') changeModalImage(-1);
            }
        });

        // FAQ Toggle Logic
        function toggleFaq(btn) {
            const item = btn.parentElement;
            // Close all others
            document.querySelectorAll('.faq-item').forEach(faq => {
                if(faq !== item) faq.classList.remove('active');
            });
            // Toggle clicked
            item.classList.toggle('active');
        }

        // Form Submit Simulation
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin mx-auto"></i>';
            btn.disabled = true;
            lucide.createIcons();

            // Simulate API call
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                document.getElementById('form-success').classList.remove('hidden');
                e.target.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById('form-success').classList.add('hidden');
                }, 5000);
            }, 1500);
        });

    
