
const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
  ];

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        padding: '96px 24px',
        backgroundColor: '#0f172a',
        opacity: 1
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', opacity: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '64px', opacity: 1 }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '16px',
            opacity: 1
          }}>
            About Me
          </h2>
          <div style={{
            width: '96px',
            height: '4px',
            background: 'linear-gradient(to right, #a855f7, #3b82f6)',
            margin: '16px auto 0',
            opacity: 1
          }} />
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '48px', 
          alignItems: 'center', 
          marginBottom: '64px',
          opacity: 1
        }}>
          <div style={{ opacity: 1 }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '32px',
              opacity: 1
            }}>
              <div style={{
                aspectRatio: '1',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '24px',
                background: 'linear-gradient(to bottom right, #a855f7, #3b82f6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '48px',
                fontWeight: 'bold',
                opacity: 1
              }}>
                AS
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '16px',
                opacity: 1
              }}>
                Ali Shehab
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.75',
                opacity: 1
              }}>
                Senior Software Engineer passionate about creating exceptional
                digital experiences.
              </p>
            </div>
          </div>

          <div style={{ opacity: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.75',
                opacity: 1
              }}>
                I'm a passionate senior software engineer with a deep love for
                crafting beautiful, functional, and performant web applications.
                With years of experience in modern frontend technologies, I
                specialize in turning complex problems into simple, elegant
                solutions.
              </p>
              <p style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.75',
                opacity: 1
              }}>
                My approach combines technical expertise with creative
                problem-solving, ensuring that every project I work on not only
                meets but exceeds expectations. I believe in writing clean,
                maintainable code and staying up-to-date with the latest
                industry trends and best practices.
              </p>
              <p style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.75',
                opacity: 1
              }}>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ opacity: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            opacity: 1
          }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '32px',
                  textAlign: 'center',
                  opacity: 1
                }}
              >
                <div style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '8px',
                  opacity: 1
                }}>
                  {stat.number}
                </div>
                <div style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '18px',
                  opacity: 1
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

