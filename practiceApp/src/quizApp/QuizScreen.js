import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C"
    }
];

const QuizScreen = ({ navigation }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);
        setShowResult(true);
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowResult(false);
        setSelectedAnswer(null);
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <View style={styles.container}>
            <Text style={styles.question}>{currentQuestion.question}</Text>
            {currentQuestion.options.map((option) => (
                <TouchableOpacity
                    key={option}
                    onPress={() => handleAnswer(option)}
                    style={{ width: 100, padding: 10, backgroundColor: '#007BFF', borderRadius: 5, marginBottom: 10 }}
                >
                    <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>{option}</Text>
                </TouchableOpacity>

            ))}
            {showResult && (
                <Text
                    style={[
                        styles.result,
                        { color: selectedAnswer === currentQuestion.answer ? 'green' : 'red' }
                    ]}
                >
                    {selectedAnswer === currentQuestion.answer
                        ? "Correct!"
                        : "Wrong! The correct answer is " + currentQuestion.answer}
                </Text>
            )}
            {currentQuestionIndex < questions.length - 1 && showResult && (
                <TouchableOpacity
                    onPress={handleNextQuestion}
                    style={{ padding: 10, backgroundColor: '#007BFF', borderRadius: 5, marginVertical: 10 }}
                >
                    <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>Next Question</Text>
                </TouchableOpacity>
            )}

            {currentQuestionIndex === questions.length - 1 && showResult && (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Results')}
                    style={{ padding: 10, backgroundColor: '#28A745', borderRadius: 5, marginVertical: 10 }}
                >
                    <Text style={{ color: '#fff', textAlign: 'center',fontWeight: 'bold', fontSize: 17 }}>Finish Quiz</Text>
                </TouchableOpacity>
            )}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#c2e9fb',
    },
    question: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    result: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
});

export default QuizScreen;
