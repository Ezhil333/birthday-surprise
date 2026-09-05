import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

// ================= PHOTOS =================

import welcomePhoto from "./assets/photos/welcome.jpg";

// ================= CAT IMAGES =================

import idleCat from "./assets/cats/idle.png";
import wrongCat from "./assets/cats/wrong.png";
import upsetCat from "./assets/cats/wrong_upset.png";
import chaseCat from "./assets/cats/no_chase.png";
import hideCat from "./assets/cats/no_hide.png";
import runningCat from "./assets/cats/no_running.png";
import repeatedNoCat from "./assets/cats/repeated_no.png";
import celebratingCat from "./assets/cats/celebrating.png";
import finalBirthdayCat from "./assets/cats/final_birthday.png";
import photo1 from "./assets/photos/photo1.jpg";
import photo2 from "./assets/photos/photo2.jpg";
import photo3 from "./assets/photos/photo3.jpg";
import photo4 from "./assets/photos/photo4.jpg";
import photo5 from "./assets/photos/photo5.jpg";
import photo6 from "./assets/photos/photo6.jpg";
import photo7 from "./assets/photos/photo7.jpg";
import photo8 from "./assets/photos/photo8.jpg";
import photo9 from "./assets/photos/photo9.jpg";
import photo10 from "./assets/photos/photo10.jpg";
import voiceNote from "./assets/audio/voice-note.mp3";
import song from "./assets/audio/song.mp3";
import finalSurprise from "./assets/surprise/final-surprise.png";

function App() {
  const [page, setPage] = useState("welcome");

  // ================= PASSWORD =================

  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  // ================= QUESTIONS =================

  const [questionStarted, setQuestionStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionMessage, setQuestionMessage] = useState("");
  const [noClicks, setNoClicks] = useState(0);
  const [catImage, setCatImage] = useState(idleCat);

  const [yesScale, setYesScale] = useState(1);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noHidden, setNoHidden] = useState(false);

  const [memoryScan, setMemoryScan] = useState("");
  const [terminationForm, setTerminationForm] = useState(false);
  const [answering, setAnswering] = useState(false);

  const questions = [
    {
      title: "THE ANNOYANCE TEST 😂",
      question:
        "Be honest… am I actually your friend, or did you just keep me around because I'm too annoying to get rid of? 😂",
    },
    {
      title: "THE GOOD FRIEND TEST 😌",
      question: "Do you consider me a good friend? 😌",
    },
    {
      title: "THE MEMORY TEST 🥹",
      question:
        "Is there at least one memory of us that you would want to keep forever? ❤️",
    },
    {
      title: "THE FUTURE TEST ❤️",
      question:
        "Years from now, when everything has changed… do you think we'll still be friends? 🥹",
    },
    {
      title: "FINAL QUESTION 🎁",
      question: "Are you ready for your actual birthday surprise? 🎁",
    },
  ];
  // ================= photos =================
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
];
  // ================= CHAPTER 01 =================

  function startSurprise() {
    setPage("secret");
    setPassword("");
    setAttempts(0);
    setMessage("");
    setUnlocked(false);
  }

  function goBack() {
    setPage("welcome");
  }

  // ================= CHAPTER 02 =================

  function checkPassword() {
    const answer = password.trim().toLowerCase();

    if (!answer) {
      setMessage("At least type something 😂👀");
      return;
    }

    if (answer === "bro") {
      setUnlocked(true);

      if (attempts === 0) {
        setMessage("Damn... I knew you could find it 😂❤️");
      } else {
        setMessage("Finally! You found it 😂❤️");
      }

      return;
    }

    const newAttempts = attempts + 1;

    setAttempts(newAttempts);
    setPassword("");

    if (newAttempts === 1) {
      setMessage("That's your first guess... seriously? 😂");
    } else if (newAttempts === 2) {
      setMessage("Okay okay... you're struggling 😭😂");
    } else if (newAttempts === 3) {
      setMessage("Still wrong?! You're making this difficult 😭");
    } else {
      setMessage(
        "Alright... I can't watch this anymore 😂 The secret word is BRO."
      );
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !unlocked) {
      checkPassword();
    }
  }

  // ================= START QUESTIONS =================

  function startQuestions() {
    setPage("questions");
    setQuestionStarted(false);
    setQuestionIndex(0);
    setQuestionMessage("");
    setNoClicks(0);
    setCatImage(idleCat);
    setYesScale(1);
    setNoPosition({ x: 0, y: 0 });
    setNoHidden(false);
    setMemoryScan("");
    setTerminationForm(false);
    setAnswering(false);
  }

  function beginQuestions() {
    setQuestionStarted(true);
  }

  // ================= NEXT QUESTION =================

  function resetQuestion() {
    setQuestionMessage("");
    setNoClicks(0);
    setCatImage(idleCat);
    setYesScale(1);
    setNoPosition({ x: 0, y: 0 });
    setNoHidden(false);
    setMemoryScan("");
    setTerminationForm(false);
    setAnswering(false);
  }

  function nextQuestion() {
    if (questionIndex < 4) {
      setQuestionIndex((previous) => previous + 1);
      resetQuestion();
    }
  }

  // ================= YES =================

  function handleYes() {
    if (answering) return;

    setAnswering(true);
    setNoHidden(true);
    setCatImage(celebratingCat);

    // QUESTION 1
    if (questionIndex === 0) {
      setQuestionMessage("Hmm… surprisingly good answer. 😌");

      setTimeout(() => {
        setQuestionMessage("I'll allow you to continue. 😂❤️");
      }, 1200);

      setTimeout(nextQuestion, 2500);
    }

    // QUESTION 2
    else if (questionIndex === 1) {
      setQuestionMessage(
        "You finally used the brain you kept in the locker. 😂"
      );

      setTimeout(() => {
        setQuestionMessage(
          "Correct. Your intelligence has been confirmed. 🧠✨"
        );
      }, 1300);

      setTimeout(() => {
        setQuestionMessage(
          "Okay… maybe there's hope for you after all. 😌"
        );
      }, 2600);

      setTimeout(nextQuestion, 4000);
    }

    // QUESTION 3
    else if (questionIndex === 2) {
      setQuestionMessage(
        "Good… then tell it to me later. 🥹❤️"
      );

      setTimeout(() => {
        setQuestionMessage(
          "I want to know which one you chose. ❤️"
        );
      }, 1300);

      setTimeout(() => {
        setQuestionMessage(
          "Okay… moving on before this gets too emotional. 😂"
        );
      }, 2600);

      setTimeout(nextQuestion, 4000);
    }

    // QUESTION 4
    else if (questionIndex === 3) {
      setQuestionMessage("I really hope so. ❤️");

      setTimeout(() => {
        setQuestionMessage(
          "Because I don't plan on getting rid of you either. 😂❤️"
        );
      }, 1300);

      setTimeout(() => {
        setQuestionMessage("One last question… 👀");
      }, 2600);

      setTimeout(nextQuestion, 4000);
    }

    // QUESTION 5
    else if (questionIndex === 4) {
      setQuestionMessage("Okay…");

      setTimeout(() => {
        setQuestionMessage("Here we go. ❤️");
      }, 1400);

      setTimeout(() => {
        setPage("letter");
      }, 3000);
    }
  }

  // ================= NO =================

  function handleNo() {
    if (answering) return;

    const newClicks = noClicks + 1;

    setNoClicks(newClicks);

    // ================= QUESTION 3 SPECIAL NO =================

    if (questionIndex === 2 && newClicks === 1) {
      setQuestionMessage("Not even ONE?! 😭");
      setCatImage(wrongCat);

      setTimeout(() => {
        setQuestionMessage(
          "Okay, now I'm questioning our entire friendship."
        );
      }, 1000);

      setTimeout(() => {
        setMemoryScan("Searching memories...");
      }, 2000);

      setTimeout(() => {
        setMemoryScan("Searching...");
      }, 2800);

      setTimeout(() => {
        setMemoryScan("Searching...");
      }, 3500);

      setTimeout(() => {
        setMemoryScan(
          "Found 327 memories. Nice try. 😂"
        );
        setCatImage(repeatedNoCat);
      }, 4300);

      setYesScale(1.2);

      return;
    }

    // ================= QUESTION 4 SPECIAL NO =================

    if (questionIndex === 3 && newClicks === 1) {
      setTerminationForm(true);
      setCatImage(upsetCat);

      setTimeout(() => {
        setQuestionMessage(
          "Okay okay… I'm giving you another chance. 😭😂"
        );
        setTerminationForm(false);
      }, 3500);

      setYesScale(1.2);

      return;
    }

    // ================= QUESTION 5 SPECIAL NO =================

    if (questionIndex === 4) {
      setYesScale((previous) => previous + 0.3);

      if (newClicks === 1) {
        setQuestionMessage("YOU PRESSED NO?! 😭");
        setCatImage(wrongCat);
      } else if (newClicks === 2) {
        setQuestionMessage("After all those questions...");
        setCatImage(chaseCat);
      } else if (newClicks === 3) {
        setQuestionMessage("After all those years...");
        setCatImage(hideCat);
      } else if (newClicks === 4) {
        setQuestionMessage("After I spent time making this... 😂");
        setCatImage(runningCat);
      } else if (newClicks >= 5) {
        setQuestionMessage(
          "The NO button has been temporarily suspended. 🚫😂"
        );
        setCatImage(repeatedNoCat);
        setNoHidden(true);
      }

      const randomX = Math.floor(Math.random() * 180 - 90);
      const randomY = Math.floor(Math.random() * 100 - 50);

      setNoPosition({
        x: randomX,
        y: randomY,
      });

      return;
    }

    // ================= NORMAL NO =================

    setYesScale((previous) => previous + 0.15);

    const randomX = Math.floor(Math.random() * 180 - 90);
    const randomY = Math.floor(Math.random() * 100 - 50);

    setNoPosition({
      x: randomX,
      y: randomY,
    });

    if (newClicks === 1) {
      setQuestionMessage("Excuse me?! You actually pressed NO? 😭");
      setCatImage(wrongCat);
    } else if (newClicks === 2) {
      setQuestionMessage("Try that again. 😂");
      setCatImage(chaseCat);
    } else if (newClicks === 3) {
      setQuestionMessage(
        "The button seems to be avoiding your decision. 👀"
      );
      setCatImage(hideCat);
    } else if (newClicks === 4) {
      setQuestionMessage(
        "Why are you still trying to press NO?! 😭😂"
      );
      setCatImage(runningCat);
    } else {
      setQuestionMessage("JUST CLICK YES 😭❤️😂");
      setCatImage(repeatedNoCat);
    }
  }

  // ================= CHAPTER 01 =================

  if (page === "welcome") {
    return (
      <div className="app">
        <section className="welcome-screen">

          <div className="decoration sparkle sparkle-one">✦</div>
          <div className="decoration sparkle sparkle-two">✧</div>
          <div className="decoration heart heart-one">♡</div>
          <div className="decoration heart heart-two">♡</div>

          <p className="top-text">
            A LITTLE SOMETHING, MADE JUST FOR YOU
          </p>

          <div className="photo-frame">
            <img
              src={welcomePhoto}
              alt="Preethi"
              className="welcome-photo"
            />
          </div>

          <h1 className="birthday-title">
            Happy Birthday,
            <span>Preethi! ✨</span>
          </h1>

          <p className="subtitle">
            I made something special for you...
          </p>

          <button
            className="unlock-button"
            onClick={startSurprise}
          >
            Unlock the Surprise
            <span className="arrow">→</span>
          </button>

        </section>
      </div>
    );
  }

  // ================= CHAPTER 02 =================

  if (page === "secret") {
    return (
      <div className="app">
        <section className="secret-screen">

          <button
            className="top-back-button"
            onClick={goBack}
          >
            ← Go Back
          </button>

          <div className="secret-content">

            <h1 className="secret-title">
              A little secret
              <span>
                stands between you and your surprise...
              </span>
            </h1>

            <p className="secret-description">
              Before you continue, you'll need to find the secret word. 👀
            </p>

            {!unlocked && (
              <div className="password-area">

                <input
                  type="text"
                  placeholder="Enter the secret word"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  className="password-input"
                  autoComplete="off"
                />

                <button
                  className="unlock-password-button"
                  onClick={checkPassword}
                >
                  Unlock 🔓
                </button>

              </div>
            )}

            {!unlocked && (
              <p className="attempts">
                Attempts: {attempts}
              </p>
            )}

            {message && (
              <p
                className={
                  unlocked
                    ? "password-message success-message"
                    : "password-message"
                }
              >
                {message}
              </p>
            )}

            {attempts >= 2 && !unlocked && (
              <div className="hint-box">
                <span>💡 Hint 1</span>
                <p>It's a 3-letter word.</p>
              </div>
            )}

            {attempts >= 3 && !unlocked && (
              <div className="hint-box">
                <span>👀 Hint 2</span>
                <p>The word you use to call me.</p>
              </div>
            )}

            {attempts >= 4 && !unlocked && (
              <div className="password-reveal">
                <p>Fine... I'll give you the answer 😭😂</p>
                <h2>BRO</h2>
                <p>Now type it properly 👀</p>
              </div>
            )}

            {unlocked && (
              <div className="success-area">

                <div className="success-icon">
                  🔓✨
                </div>

                <h2>Friendship access granted!</h2>

                <p>
                  Okay... you may continue now 😌
                </p>

                <button
                  className="continue-button"
                  onClick={startQuestions}
                >
                  Continue →
                </button>

              </div>
            )}

          </div>
        </section>
      </div>
    );
  }

  // ================= CHAPTER 03 =================

  if (page === "questions") {

    const currentQuestion = questions[questionIndex];

    // INTRO
    if (!questionStarted) {
      return (
        <div className="app">
          <section className="questions-screen">

            <button
              className="top-back-button"
              onClick={() => setPage("secret")}
            >
              ← Go Back
            </button>

            <motion.div
              className="questions-intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              

              <h1>Before I let you see your surprise…</h1>

              <p>
                I have a few very important questions. 👀
              </p>

              <p>
                <strong>Answer carefully. I'm watching. 😌</strong>
              </p>

              <img
                src={idleCat}
                alt="Watching cat"
                className="question-cat"
              />

              <button
                className="continue-button"
                onClick={beginQuestions}
              >
                I'm Ready 😌 →
              </button>

            </motion.div>

          </section>
        </div>
      );
    }

    return (
      <div className="app">

        <section className="questions-screen">

          <button
            className="top-back-button"
            onClick={() => setPage("secret")}
          >
            ← Go Back
          </button>

          <div className="questions-content">

            <p className="chapter">
              FRIENDSHIP VERIFICATION
            </p>

            <div className="heart-progress">
              {"♥".repeat(questionIndex)}
              {"♡"} {questionIndex + 1} / 5
            </div>

            <AnimatePresence mode="wait">

              <motion.div
                key={questionIndex}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
                className="question-card"
              >

                <p className="question-number">
                  {currentQuestion.title}
                </p>

                <img
                  src={catImage}
                  alt="Funny reaction"
                  className="question-cat"
                />

                <h1 className="question-title">
                  {currentQuestion.question}
                </h1>

                {questionMessage && (
                  <motion.p
                    className="question-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {questionMessage}
                  </motion.p>
                )}

                {memoryScan && (
                  <motion.p
                    className="memory-scan"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {memoryScan}
                  </motion.p>
                )}

                {terminationForm && (
                  <motion.div
                    className="termination-form"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <h2>FRIENDSHIP TERMINATION FORM 😂</h2>

                    <p>FRIENDSHIP STATUS: ❌</p>

                    <p>Reason: She said NO.</p>

                    <p>Appeal: Available 😭😂</p>
                  </motion.div>
                )}

                {!answering && (
                  <div className="question-buttons">

                    <button
                      className="yes-button"
                      onClick={handleYes}
                      style={{
                        transform: `scale(${yesScale})`,
                      }}
                    >
                      YES ❤️
                    </button>

                    {!noHidden && (
                      <motion.button
                        className="no-button"
                        onClick={handleNo}
                        animate={{
                          x: noPosition.x,
                          y: noPosition.y,
                        }}
                      >
                        NO 😈
                      </motion.button>
                    )}

                  </div>
                )}

              </motion.div>

            </AnimatePresence>

          </div>

        </section>

      </div>
    );
  }

  // ================= CHAPTER 04 - BIRTHDAY LETTER =================

if (page === "letter") {
  return (
    <div className="app">

      <section className="letter-screen">

        <button
          className="top-back-button"
          onClick={() => setPage("questions")}
        >
          ← Go Back
        </button>

        <motion.div
          className="letter-container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={finalBirthdayCat}
            alt="Birthday celebration"
            className="letter-cat"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          <div className="letter-card">

            <p className="letter-date">
              A special message for you ❤️
            </p>

            <h1>
              Hey, Happy Birthday, bro! 🎂❤️
            </h1>

            <div className="letter-content">

              <p>
                This is the second birthday letter for you from me. I don't
                know how many more you'll receive from me in the future, but
                I'm really happy that we're still friends. And honestly, I
                hope you feel the same way too.
              </p>

              <p>
                Stay happy. Stay healthy. And I hope all your wishes come
                true.
              </p>

              <p>
                When I look back at all our memories, it genuinely makes me
                feel good. All the fun we had, all the stupid moments, and
                even every fight—we've been through a lot, and somehow, those
                memories are still special to me. I hope you feel the same way
                too.
              </p>

              <p>
                And honestly... I really miss you. I miss talking to you. I
                miss all the fun we had together.
              </p>

              <p>
                I know things have changed. Everyone is going on their own
                path, trying to succeed in life. Sometimes it feels like one
                of those movie time skips where everyone goes their separate
                ways... but somehow, I hope we'll all meet again. ❤️
              </p>

              <p>
                I know some of my actions worried you, and I'm sorry for that.
                But no matter what happens between us, I want you to know that
                I'll be there if you ever need me.
              </p>

              <p>
                Sorry for the things I did wrong. And thank you for being a
                part of my life.
              </p>

              <p className="letter-ending">
                Stay happy, bro. ❤️
                <br />
                Happy Birthday once again. 🎂✨
              </p>

              <p className="letter-ending">
                I hope all your wishes come true. ❤️
              </p>

            </div>

            <div className="letter-signature">
              <p>From someone who still considers you a good friend 😌❤️</p>
            </div>

          </div>

          <p className="letter-bottom-text">
            Okay... enough emotions for now 😂❤️
          </p>
          <button
            className="continue-button memories-continue-button"
            onClick={() => setPage("memories")}
          >
            One more thing... 📸 →
          </button>

        </motion.div>

      </section>

    </div>
  );
}
// ================= CHAPTER 05 - OUR MEMORIES =================

if (page === "memories") {
  return (
    <div className="app">

      <section className="memories-screen">

        <button
          className="top-back-button"
          onClick={() => setPage("letter")}
        >
          ← Go Back
        </button>


        <motion.div
          className="memories-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="memories-title">
            Our Memories 📸❤️
          </h1>


          <p className="memories-description">
            Some moments are too special to forget...
          </p>


          {/* PHOTO COUNTER */}

          <div className="photo-counter">
            Photo {currentPhoto + 1} / {photos.length}
          </div>


          {/* PHOTO */}

          <AnimatePresence mode="wait">

            <motion.div
              key={currentPhoto}
              className="memory-photo-frame"
              initial={{ opacity: 0, scale: 0.92, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.92, x: -40 }}
              transition={{ duration: 0.5 }}
            >

              <img
                src={photos[currentPhoto]}
                alt={`Memory ${currentPhoto + 1}`}
                className="memory-photo"
              />

            </motion.div>

          </AnimatePresence>


          {/* PHOTO CONTROLS */}

          <div className="memory-controls">

            <button
              className="memory-nav-button"
              onClick={() => {
                if (currentPhoto > 0) {
                  setCurrentPhoto(currentPhoto - 1);
                }
              }}
              disabled={currentPhoto === 0}
            >
              ← Previous
            </button>


            <div className="memory-dots">

              {photos.map((_, index) => (

                <button
                  key={index}
                  className={
                    index === currentPhoto
                      ? "memory-dot active"
                      : "memory-dot"
                  }
                  onClick={() => setCurrentPhoto(index)}
                  aria-label={`Go to photo ${index + 1}`}
                />

              ))}

            </div>


            <button
              className="memory-nav-button"
              onClick={() => {
                if (currentPhoto < photos.length - 1) {
                  setCurrentPhoto(currentPhoto + 1);
                }
              }}
              disabled={currentPhoto === photos.length - 1}
            >
              Next →
            </button>

          </div>


          {/* AFTER LAST PHOTO */}

          {currentPhoto === photos.length - 1 && (

            <motion.div
              className="memories-ending"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p>
                A lot has changed... but these memories will always be special. ❤️
              </p>

              <button
                className="continue-button"
                onClick={() => setPage("voice")}
              >
                A Special Message For You 🎙️ ❤️
              </button>

            </motion.div>

          )}

        </motion.div>

      </section>

    </div>
  );
}
// ================= CHAPTER 06 - VOICE NOTE =================

if (page === "voice") {
  return (
    <div className="app">

      <section className="voice-screen">

        <button
          className="top-back-button"
          onClick={() => setPage("memories")}
        >
          ← Go Back
        </button>

        <motion.div
          className="voice-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="voice-title">
            Something I Wanted You to Hear... 🎙️❤️
          </h1>

          <p className="voice-description">
            Some things are better said with a voice.
          </p>


          {/* VOICE NOTE CARD */}

          <div className="voice-card">

            <div className="voice-icon">
              🎙️
            </div>

            <p className="voice-message">
              Press play when you're ready...
            </p>

            <audio
              controls
              className="voice-audio"
            >
              <source src={voiceNote} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

          </div>


          <p className="voice-bottom-text">
            That's all I wanted to say... ❤️
          </p>


          <button
            className="continue-button"
            onClick={() => setPage("song")}
          >
            Play One More Thing... 🎵 →
          </button>

        </motion.div>

      </section>

    </div>
  );
}
// ================= CHAPTER 07 - THE SONG =================

if (page === "song") {
  return (
    <div className="app">

      <section className="song-screen">

        <button
          className="top-back-button"
          onClick={() => setPage("voice")}
        >
          ← Go Back
        </button>

        <motion.div
          className="song-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="song-title">
            This Song Made Me Think of You 🎵❤️
          </h1>

          <p className="song-description">
            Every time I hear this song, it reminds me of our memories.
          </p>


          {/* SONG CARD */}

          <div className="song-card">

            <div className="song-icon">
              🎶
            </div>

            <p className="song-message">
              Put on your headphones and listen... 🎧
            </p>

           <audio
              key="song-player"
              controls
              className="song-audio"
              src={song}
            >
              Your browser does not support the audio element.
            </audio>
          </div>


          <p className="song-bottom-text">
            Some songs become memories too. ❤️
          </p>


          <button
            className="continue-button"
            onClick={() => setPage("surprise")}
          >
            One Final Surprise... 🎁 →
          </button>

        </motion.div>

      </section>

    </div>
  );
}
// ================= CHAPTER 07 - FINAL SURPRISE =================

if (page === "surprise") {
  return (
    <div className="app">

      <section className="surprise-screen">

        <button
          className="top-back-button"
          onClick={() => setPage("voice")}
        >
          ← Go Back
        </button>

        <motion.div
          className="surprise-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="surprise-title">
            One Last Surprise... ❤️
          </h1>

          <p className="surprise-description">
            I have something special for you... ✨
          </p>

          <motion.div
            className="kavidhai-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >

            <img
              src={finalSurprise}
              alt="A special kavidhai for you"
              className="kavidhai-image"
            />

          </motion.div>

          <motion.div
            className="surprise-ending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >

            <p>
              Happy Birthday, Preethi! 🎂❤️
            </p>

            <p>
              I hope this little surprise made you smile. ✨
            </p>

            <h2>
              Always stay happy! ❤️
            </h2>
            <button
              className="continue-button"
              onClick={() => setPage("feedback")}
            >
              One Last Thing... ❤️ →
            </button>
          </motion.div>

        </motion.div>

      </section>

    </div>
  );
}
// ================= CHAPTER 08 - THANK YOU + FEEDBACK =================

if (page === "feedback") {
  return (
    <div className="app">

      <section className="feedback-screen">

        <button
          className="top-back-button"
          onClick={() => setPage("surprise")}
        >
          ← Go Back
        </button>

        <div className="feedback-container">

          <p className="chapter">
            ONE LAST THING ❤️
          </p>

          <h1 className="feedback-title">
            Thank You For Being
            <span> In My Life ❤️</span>
          </h1>

          <p className="thank-you-message">
            Through all the fun, stupid moments, fights, memories,
            and everything in between... I'm genuinely grateful that
            you were part of my life. ❤️
            <br /><br />
            No matter where life takes us, these memories will always
            mean something to me.
          </p>


          <div className="feedback-card">

            <div className="feedback-icon">
              💌
            </div>

            <h2>
              So... how did this little surprise make you feel? 🥹❤️
            </h2>

            <p>
              Tell me honestly. I really want to know what you thought.
            </p>

            <textarea
              id="feedback-message"
              placeholder="Write your thoughts here... ❤️"
              className="feedback-textarea"
            />

            <button
              className="send-feedback-button"
              onClick={() => {
                const message =
                  document.getElementById("feedback-message").value;

                const subject =
                  "My Birthday Surprise Experience ❤️";

                const body =
                  `Hey bro! ❤️\n\n${message}`;

                window.location.href =
                  `mailto:ezhilvendhan63@gmail.com?subject=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(body)}`;
              }}
            >
              Send Me Your Thoughts 💌
            </button>

          </div>

          <p className="final-goodbye">
            Happy Birthday once again, Preethi. 🎂❤️
            <br />
            And thank you... for everything.
          </p>

        </div>

      </section>

    </div>
  );
}
  return null;
}

export default App;