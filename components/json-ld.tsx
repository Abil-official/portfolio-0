export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Abil Rai",
        url: "https://abilrai.com",
        image: "https://abilrai.com/AR-logo.png",
        sameAs: [
            "https://github.com/Abil-official",
            "https://linkedin.com/in/abil-rai",
            "mailto:abilrai.official@gmail.com",
        ],
        jobTitle: "Laravel Developer",
        description:
            "Full-stack developer with expertise in Laravel, React, and building scalable web applications.",
        knowsAbout: [
            "Laravel",
            "React",
            "Next.js",
            "PHP",
            "Web Development",
            "Software Architecture",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
