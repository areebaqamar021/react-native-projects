import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
                <Button
                    key={option}
                    title={option}
                    onPress={() => handleAnswer(option)}
                />
            ))}
            {showResult && (
                <Text style={[styles.result, { color: selectedAnswer === currentQuestion.answer ? 'green' : 'red' }]}>
                    {selectedAnswer === currentQuestion.answer
                        ? "Correct!"
                        : "Wrong! The correct answer is " + currentQuestion.answer}
                </Text>
            )}
            {currentQuestionIndex < questions.length - 1 && showResult && (
                <Button title="Next Question" onPress={handleNextQuestion} />
            )}
            {currentQuestionIndex === questions.length - 1 && showResult && (
                <Button title="Finish Quiz" onPress={() => navigation.navigate('Results')} />
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
    },
    question: {
        fontSize: 20,
        marginBottom: 20,
    },
    result: {
        fontSize: 16,
        marginTop: 20,
    },
});

export default QuizScreen;
