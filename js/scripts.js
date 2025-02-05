/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    }); 

    $('.abstract').on('click', function(){
        // alert(authors[$(this).data('key')]['abstract']);
        let author = authors[$(this).data('key')];
        $('.m-abs .modal-title').text(author['title']);
        $('.m-abs .modal-body .abs-title').text("Abstract");
        $('.m-abs .modal-body .abs-content').html(author['abstract']);
        $('.m-abs').modal('toggle');
    });

    let authors = {
        CanhDo: {
            title: "QRAT: A Reachability Analysis Tool for Quantum Programs",
            abstract: "With recent exponential investments from big companies and governments, there is a widespread belief that building a large-scale quantum computer is only a matter of time and effort. However, quantum computing is fundamentally different and counter-intuitive compared to classical computing, making it difficult to develop efficient algorithms and increasing the risk of programming errors. Therefore, ensuring the correctness of quantum programs becomes critical. This talk introduces QRAT, the first reachability analysis tool for quantum programs, leveraging a state-of-the-art decision diagram developed in MQT Core for quantum computing. QRAT provides a novel framework for specifying quantum programs, defining their reachability properties, and searching for satisfied reachable states from an initial state, similar to the classical case. Experimental results demonstrate its effectiveness and practicality in verifying quantum programs. Since reachability analysis is a fundamental component of model-checking algorithms, QRAT represents an essential step toward the development of a full-fledged model checker for quantum programs."
        },
        QuocTrinh: {
            title: "Solution-Processable P-Type Oxide Semiconductor Thin Films and Devices",
            abstract: `P-type oxide semiconductor thin films have attracted significant attentions for abundant applications in electrical and optical semiconductor devices. Among them, cupric oxide (CuO) thin film enables to design as a hole-transport visible-light absorber layer in solar cells. In recent, we have defined the absorption figure of merit (a-FOM) to evaluate qualities of the conductive absorption films, prior to applying in device fabrication [1, 2]. In order to enhance the a-FOM, we attempted to add Ni into the CuO-based thin films with doping concentration ranged from 0 to 4 wt%, via a solution processing [3, 4]. We found that the film with 4 wt% Ni doping showed a maximal value of a-FOM as high as 30.88 Ω-1cm-1, corresponding to a square resistance of 2.07 MΩ/sq and an absorption length of 63.8 nm. Considering simulation and experiment correlations, and using B3LYP, PBE0, HSE06 hybrid functionals, or GGA-PBE-US Cu16O16 and antiferromagnetic, we obtained that the bandgap energy of CuO films is well agreed with the experimental value. Interestingly, we demonstrated that the thin-film transistor exhibited a p-channel operation, with an on/off current ratio of approximately 102-103 [5]. In addition, we demonstrated a simple solar cell with ZnO:Al/CuO junction structure, under all solution processes [6]. The achievements will be presented and discussed at the symposium in detail.
<small>
[1] H.Q. Nguyen, D.V. Nguyen, A. Fujiwara, <b>B.N.Q. Trinh*</b>, Thin Solid Films, 660 (2018) 819-823.
[2] D.T. Nam and <b>B.N.Q. Trinh*</b>, Thin Solid Films, 802 (2024) 140441.
[3] N.V. Loi, L.T.N. Mai, N.H. Luong, <b>B.N.Q. Trinh*</b>, Optical Materials: X, 19 (2023) 100246.
[4] L.T.N. Mai, N.V. Loi, D.H. Minh, D.V. Thanh, <b>B.N.Q. Trinh*</b>, Materials Transactions, 64 (2023) 2151-2157.
[5] <b>B.N.Q. Trinh*</b>, N.V. Dung, N.Q. Hoa, N.H. Duc, D.H. Minh, A. Fujiwara, Thin Solid Films, 704 (2020) 137991.
[6] <b>B.N.Q. Trinh*</b>, E.K. Palupi, and A. Fujiwara, “Chapter 9: Solution-Processed Oxide-Semiconductor Films and Devices” of the “Functional Thin Films Technology” book, CRC Press (Taylor & Francis Group), pp. 225-252, 2021. DOI: 10.1201/9781003088080-9.
</small>
`,
        },
        SonBui : {
            title: "Soft Rotation-Based Grippers: Bio-Inspired Innovations and Advances",
            abstract: "Soft robotics has seen transformative progress in recent years, with bio-inspired designs leading the charge toward versatile, efficient, and adaptive solutions. This talk provides a review of the evolution and principles behind soft rotation-based grippers, emphasizing their impact on modern robotic manipulation. The talk also delves into the development of ROSE (Rotation-based Squeezing Robotics Gripper), a bio-inspired innovation that mimics natural mechanics for enhanced precision and adaptability. Key design elements, operational advantages, and potential applications of ROSE will be explored, alongside a discussion of other rotation-based grippers inspired by biological systems. By connecting foundational concepts with state-of-the-art research, this session aims to inspire new directions in the design and implementation of soft robotic grippers, fostering further advancements in the field.",
        },
        TungLe: {
            title: "How Rationals Boost Textual Entailment Modeling: Insights from Large Language Models",
            abstract: `This speech introduces an innovative methodology for rationale-based distillation in textual entailment. Central to our methodology is the use of diverse and deep rationale types generated by large language models, eliminating the need for explicit feature engineering between text-hypothesis pairs. Through extensive experimentation, we demonstrate the effectiveness of our rationale-enhanced distillation process, underpinned by a comprehensive study of rationales. Remarkably, our model, which utilizes the most impactful rationales and operates with 795 times fewer parameters, exhibits competitive performance, especially in contexts limited by resource availability. Specifically, our model significantly surpasses RoBERTa, FLAN-T5 Large, and GPT-3.5 in performance. Our findings underscore the potential of rationale-based approaches, which improve textual entailment modeling and pave the way for future research. These techniques could be applied to other areas of NLP and beyond. This study’s contributions are poised to benefit researchers and practitioners seeking to leverage the power of large language models in augmenting reasoning capabilities with rationales. The novelty of our approach lies in its ability to deliver high performance with significantly fewer computational resources, making it a valuable advancement in the field.`,
        },
        TranThu: {
            title: "Nanomaterials for Electrochemical Energy Storage",
            abstract: "The growing demand for efficient and sustainable energy storage solutions has led to the exploration of nanomaterials in electrochemical energy storage systems. This talk will discuss the unique properties of nanomaterials that make them ideal candidates for use in batteries and supercapacitors. We will explore various nanostructured materials, including carbon-based materials, metal oxides, metal sulfides, and conductive polymers, and their role in improving electrochemical performance for energy storage. The presentation will also cover recent advancements in nanomaterial synthesis, characterization techniques, and integrating these materials into next-generation energy storage devices."
        },
        LeMinh: {
            title: "Understanding Reasoning in Large Language Models",
            abstract: "Large Language Models (LLMs) have shown remarkable performance in tasks such as text completion and classification. Yet, whether they truly “reason” remains controversial—particularly in complex areas like law. In this talk, we examine LLMs’ abilities to interpret and apply legal knowledge, the challenges they face in logical inference, and how current techniques (e.g., chain-of-thought prompting) could bridge the gap between pattern matching and genuine reasoning. We also discuss practical implications, highlighting both the potential and the pitfalls of deploying LLMs as legal assistants, and point to future directions for more reliable and transparent legal reasoning systems."
        },
        HieuPhan: {
            title: "Learning Textual and Structural Relations for Complex Legal Information Retrieval",
            abstract: "Today, judges and lawyers frequently need to find relevant legal information when they are working on a new legal case, performing legal research, case analysis, court preparation, giving legal advice to a client, developing a defense strategy, or making decision on a current case. However, the larger a legal database is, the more difficult for them to find relevant materials manually. In addition, legal documents like statutory law, case law or contract are normally lengthy and complex, consisting of multiple parts, chapters, sections, articles, and so on. Therefore, building an intelligent and automated legal information retrieval (IR) system is significant to improve and accelerate their legal process and workflow. This talk aims to present different legal IR methods based on an in-depth understanding of the nature and characteristics of legal data as well as the complexity of legal IR problems. Technically, we leverage the textual and structural relationships in legal data to deal with problems like case law retrieval, statutory – case law retrieval, and IR-based legal question answering. These problems are challenging because the concept of relevancy in these tasks is no longer about keyword or topic matching. The similarity between legal texts requires a deeper analysis of legal arguments and logical reasoning that are far beyond the lexical or topical comparison. Our work makes the most of the legal relations at different levels of granularity based on both textual and structural relationships including the intra and inter-article relations. Our work also explored the possiblity to improve the performance of the legal IR problems with weak-labeled data, reference graphs, and knowledge graphs. The empirical results are interesting and promising for further study."
        }
    };
})
