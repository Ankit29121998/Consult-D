import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';


const AppointmentBookModal = ({ modalVisible = false, setModalVisible = () => { } }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)} // Handle back press on Android
        >
            <TouchableOpacity
                style={styles.modalOverlay}
                activeOpacity={1}
                onPressOut={() => setModalVisible(false)} // Close modal on outside press
            >
                <View style={styles.modalContainer}>
                    <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Are you sure you want to</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Cancel/Withdraw Appointment</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textRefunded}>Your payment will be refunded</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
                                <Text style={styles.buttonTextCancel}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.sureButton}>
                                <Text style={styles.buttonTextSure}>Sure</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
        padding: 10,
        backgroundColor: 'white', // White background
        borderRadius: 10, // Rounded corners
    },
    container: {
        flexDirection: 'column',  // This is the default, but you can explicitly set it
        padding: 20,
        alignItems: 'center',
    },
    textContainer: {

        fontSize: 20,
        marginBottom: 4, // Adds some space between the lines if needed
    },
    text: {
        color: '#555B61',
        fontSize: 18,
        fontWeight: 600,
    },
    textRefunded: {
        color: '#697C8C',
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cancelButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: '#697C8C',
        borderWidth: 1,
        borderRadius: 5,
        width: '45%', // Ensures buttons take up equal width
        alignItems: 'center',
    },
    sureButton: {
        backgroundColor: '#2C85C7',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '45%', // Ensures buttons take up equal width
        alignItems: 'center',
    },
    buttonTextCancel: {
        color: '#697C8C',
        fontSize: 16,
    },
    buttonTextSure: {
        color: 'white',
        fontSize: 16,

    }



});

export default AppointmentBookModal;
