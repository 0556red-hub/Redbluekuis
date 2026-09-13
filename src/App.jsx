import React, { useState } from 'react';

export default function App() {
  const [activeSubject, setActiveSubject] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Data Contoh Soal Interaktif untuk 3 Modul
  const modules = {
    matematika: [
      {
        id: 1,
        title: "Level 1: Penjumlahan Aljabar Fungsi",
        question: "Diketahui f(x) = 3x + 5 dan g(x) = 2x - 1. Tentukan hasil dari fungsi (f + g)(x)!",
        options: ["5x + 4", "5x + 6", "x + 6", "5x - 4"],
        correct: "5x + 4",
        explanation: "1. Konsep penjumlahan fungsi: (f + g)(x) = f(x) + g(x).\n2. Substitusikan: (3x + 5) + (2x - 1).\n3. Kelompokkan suku sejenis: (3x + 2x) + (5 - 1) = 5x + 4."
      },
      {
        id: 2,
        title: "Level 2: Pengurangan Aljabar Fungsi",
        question: "Diketahui f(x) = x^2 - 4 dan g(x) = 2x + 3. Tentukan bentuk sederhana dari (f - g)(x)!",
        options: ["x^2 - 2x - 1", "x^2 - 2x - 7", "x^2 + 2x - 7", "x^2 - 2x + 1"],
        correct: "x^2 - 2x - 7",
        explanation: "1. Rumus: (f - g)(x) = f(x) - g(x).\n2. Masukkan fungsi: (x^2 - 4) - (2x + 3).\n3. Distribusi negatif: x^2 - 4 - 2x - 3 = x^2 - 2x - 7."
      }
    ],
    indonesia: [
      {
        id: 1,
        title: "Paket 1: Identifikasi Tesis & Deduktif",
        question: "Penggunaan kendaraan listrik di perkotaan mendesak dipercepat guna menekan polusi udara... Di mana letak tesis utama paragraf tersebut?",
        options: [
          "Di akhir paragraf dengan pola induktif",
          "Di awal paragraf dengan pola deduktif",
          "Di tengah paragraf dengan pola campuran",
          "Tidak memiliki tesis"
        ],
        correct: "Di awal paragraf dengan pola deduktif",
        explanation: "Tesis terletak di kalimat pertama sebagai gagasan utama, lalu didukung data fakta di kalimat berikutnya (pola deduktif: umum ke khusus)."
      }
    ],
    inggris: [
      {
        id: 1,
        title: "Soal 1: Terjemahan Idiom",
        question: "Terjemahan paling akurat untuk kalimat: 'Jangan langsung percaya... dia hanya melempar batu sembunyi tangan.'",
        options: [
          "Don't throw stones and hide your hands.",
          "Don't take his sweet promises at face value; he is just playing the innocent after causing trouble.",
          "Don't trust his sweet words; he likes burning bridges.",
          "Don't stir the pot."
        ],
        correct: "Don't take his sweet promises at face value; he is just playing the innocent after causing trouble.",
        explanation: "Pilihan ini menerjemahkan makna kontekstual idiom (berpura-pura polos setelah berbuat ulah) secara akurat, bukan terjemahan kata-per-kata yang salah secara budaya."
      }
    ]
  };

  const handleSelectAnswer = (option, questionData) => {
    setSelectedAnswer(option);
    setShowExplanation(true);
    if (option === questionData.correct) {
      setScore(score + 10);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCurrentLevel(currentLevel + 1);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '600px', margin: 'auto', backgroundColor: '#f9f9f9', minHeight: '100vh', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Platform Belajar Mandiri Interaktif</h1>
      
      {!activeSubject ? (
        <div>
          <p style={{ textAlign: 'center', color: '#666' }}>Pilih modul mata pelajaran di bawah ini untuk mulai belajar:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            <button onClick={() => { setActiveSubject('matematika'); setCurrentLevel(0); setScore(0); }} style={{ padding: '15px', background: '#3498db', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>1. Modul Matematika (Fungsi & Aljabar)</button>
            <button onClick={() => { setActiveSubject('indonesia'); setCurrentLevel(0); setScore(0); }} style={{ padding: '15px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>2. Modul Bahasa Indonesia (Teks Argumentasi)</button>
            <button onClick={() => { setActiveSubject('inggris'); setCurrentLevel(0); setScore(0); }} style={{ padding: '15px', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>3. Modul Bahasa Inggris (Translation & Context)</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => setActiveSubject(null)} style={{ marginBottom: '15px', padding: '8px 12px', background: '#7f8c8d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>← Kembali ke Menu Utama</button>
          
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: 'bold', color: '#555' }}>
              <span>Modul: {activeSubject.toUpperCase()}</span>
              <span>Skor: {score}</span>
            </div>

            {modules[activeSubject][currentLevel] ? (
              <div>
                <h3>{modules[activeSubject][currentLevel].title}</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{modules[activeSubject][currentLevel].question}</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
                  {modules[activeSubject][currentLevel].options.map((opt, index) => {
                    let bg = '#fff';
                    let border = '1px solid #ccc';
                    if (showExplanation) {
                      if (opt === modules[activeSubject][currentLevel].correct) {
                        bg = '#d4edda'; border = '1px solid #28a745';
                      } else if (opt === selectedAnswer) {
                        bg = '#f8d7da'; border = '1px solid #dc3545';
                      }
                    }
                    return (
                      <button 
                        key={index} 
                        disabled={showExplanation}
                        onClick={() => handleSelectAnswer(opt, modules[activeSubject][currentLevel])}
                        style={{ padding: '12px', textAlign: 'left', background: bg, border: border, borderRadius: '5px', cursor: 'pointer', fontSize: '14px' }}>
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {showExplanation && (
                  <div style={{ marginTop: '20px', padding: '15px', background: '#eef2f7', borderRadius: '5px' }}>
                    <h4 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>Pembahasan / Penjelasan:</h4>
                    <p style={{ whiteSpace: 'pre-line', margin: 0, fontSize: '14px', color: '#333' }}>{modules[activeSubject][currentLevel].explanation}</p>
                    
                    {currentLevel + 1 < modules[activeSubject].length ? (
                      <button onClick={nextQuestion} style={{ marginTop: '15px', padding: '10px 20px', background: '#2980b9', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Soal Berikutnya →</button>
                    ) : (
                      <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#27ae60' }}>🎉 Selamat! Kamu telah menyelesaikan modul ini.</p>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <h3>Modul Selesai!</h3>
                <p>Total Skor Akhir Kamu: {score}</p>
                <button onClick={() => setActiveSubject(null)} style={{ padding: '10px 20px', background: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Pilih Modul Lain</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
