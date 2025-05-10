// App.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const timeSlots = {
  'Morning Shift': [
    { time: '10:00 AM', available: true },
    { time: '10:15 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '10:45 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:15 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '11:45 AM', available: true },
  ],
  'Afternoon Shift': [
    { time: '12:00 PM', available: true },
    { time: '12:15 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '12:45 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:15 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '1:45 PM', available: true },
  ],
  'Evening Shift': [
    { time: '2:00 PM', available: true },
    { time: '2:15 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '2:45 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:15 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '3:45 PM', available: true },
  ],
  'Night Shift': [
    { time: '4:00 PM', available: true },
    { time: '4:15 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '4:45 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:15 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '5:45 PM', available: true },
  ],
};

const screenWidth = Dimensions.get('window').width;
const timeSlotWidth = (screenWidth - 32 - 16) / 3; // 32 for padding, 16 for gaps

const BookVisitAppointment = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedShift, setSelectedShift] = useState('Morning Shift');
  const [selectedTime, setSelectedTime] = useState(null);

  const isDateDisabled = (year, month, day) => {
    const checkDate = new Date(year, month, day);
    return checkDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const getMonthData = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDayOfWeek = firstDay.getDay() || 7; // Convert Sunday (0) to 7
    const daysInMonth = lastDay.getDate();

    return {
      year,
      month,
      daysInMonth,
      startingDayOfWeek,
    };
  };

  const generateCalendarDays = () => {
    const days = [];
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];
    const { year, month, daysInMonth, startingDayOfWeek } = getMonthData(currentDate);

    // Generate week days header
    const weekDaysRow = weekDays.map((day) => (
      <Text key={day} style={styles.weekDay}>
        {day}
      </Text>
    ));
    days.push(
      <View key="weekdays" style={styles.weekRow}>
        {weekDaysRow}
      </View>
    );

    let week = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 1; i < startingDayOfWeek; i++) {
      week.push(
        <View key={`empty-${i}`} style={styles.dateButton} />
      );
    }

    // Generate actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const isDisabled = isDateDisabled(year, month, day);
      week.push(
        <TouchableOpacity
          key={day}
          onPress={() => !isDisabled && setSelectedDate(day)}
          style={[
            styles.dateButton,
            selectedDate === day && styles.selectedDate,
            isDisabled && styles.disabledDate,
          ]}
          disabled={isDisabled}
        >
          <Text
            style={[
              styles.dateText,
              selectedDate === day && styles.selectedDateText,
              isDisabled && styles.disabledDateText,
            ]}
          >
            {day}
          </Text>
        </TouchableOpacity>
      );

      if (week.length === 7) {
        days.push(
          <View key={`week-${day}`} style={styles.weekRow}>
            {week}
          </View>
        );
        week = [];
      }
    }

    if (week.length > 0) {
      while (week.length < 7) {
        week.push(
          <View key={`empty-end-${week.length}`} style={styles.dateButton} />
        );
      }
      days.push(
        <View key="last-week" style={styles.weekRow}>
          {week}
        </View>
      );
    }

    return days;
  };

  const handlePreviousMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    if (newDate.getMonth() >= today.getMonth() && newDate.getFullYear() >= today.getFullYear()) {
      setCurrentDate(newDate);
      setSelectedDate(null);
    }
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  const formatMonthYear = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const renderShifts = () => (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.shiftsContainer}
    >
      {Object.keys(timeSlots).map((shift) => {
        return(
<TouchableOpacity
          key={shift}
          style={[
            styles.shiftButton,
            selectedShift === shift && styles.selectedShiftButton,
          ]}
          onPress={() => {
            setSelectedShift(shift);
            setSelectedTime(null);
          }}
        >
          <Text
            style={[
              styles.shiftButtonText,
              selectedShift === shift && styles.selectedShiftButtonText,
            ]}
          >
          {shift}
                    </Text>
        </TouchableOpacity>
        )
      })}
        
      {/* ))} */}
    </ScrollView>
  );

  const generateTimeSlots = () => {
    const slots = [];
    const currentShiftSlots = timeSlots[selectedShift];
    
    for (let i = 0; i < currentShiftSlots.length; i += 3) {
      const rowSlots = currentShiftSlots.slice(i, i + 3);
      const row = (
        <View key={`row-${i}`} style={styles.timeSlotRow}>
          {rowSlots.map((slot) => (
            <TouchableOpacity
              key={slot.time}
              style={[
                styles.timeSlot,
                selectedTime === slot.time && styles.selectedTimeSlot,
                !slot.available && styles.disabledTimeSlot,
              ]}
              onPress={() => setSelectedTime(slot.time)}
              disabled={!slot.available}
            >
              <Text
                style={[
                  styles.timeSlotText,
                  selectedTime === slot.time && styles.selectedTimeSlotText,
                  !slot.available && styles.disabledTimeSlotText,
                ]}
              >
                {slot.time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
      slots.push(row);
    }

    return slots;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Visit Appointment</Text>
      </View> */}

      <View style={styles.calendarContainer}>
        <View style={styles.monthHeader}>
          <Text style={styles.monthTitle}>{formatMonthYear(currentDate)}</Text>
          <View style={styles.monthNavigation}>
            <TouchableOpacity onPress={handlePreviousMonth}>
              <MaterialIcons name="chevron-left" size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextMonth}>
              <MaterialIcons name="chevron-right" size={24} color="#666" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.calendar}>{generateCalendarDays()}</View>
      </View>

      <View style={styles.timeSelection}>
        <Text style={styles.timeSelectionTitle}>Select Time Slot</Text>
        {renderShifts()}
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.timeSlotsContainer}
        >
          {generateTimeSlots()}
        </ScrollView>
      </View>

      <TouchableOpacity 
        style={[
          styles.nextButton,
          (!selectedDate || !selectedTime) && styles.disabledButton,
        ]}
        disabled={!selectedDate || !selectedTime}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  calendarContainer: {
    paddingHorizontal:16,
    paddingVertical:8,
    backgroundColor: '#f8f9fa',
  },
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  monthTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  monthNavigation: {
    flexDirection: 'row',
    gap: 4,
  },
  calendar: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 2,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  weekDay: {
    flex: 1,
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginBottom: 4,
  },
  dateButton: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  dateText: {
    fontSize: 12,
    color: '#333',
  },
  selectedDate: {
    backgroundColor: '#4a90e2',
  },
  selectedDateText: {
    color: '#fff',
  },
  disabledDate: {
    backgroundColor: '#f0f0f0',
  },
  disabledDateText: {
    color: '#999',
  },
  timeSelection: {
    flex: 1,
    backgroundColor: '#fff',
  },
  timeSelectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 8,
    paddingHorizontal: 16,
    color: '#333',
  },
  shiftsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  shiftButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4a90e2',
    marginRight: 8,
    backgroundColor: 'transparent',
  },
  selectedShiftButton: {
    backgroundColor: '#4a90e2',
  },
  shiftButtonText: {
    color: '#4a90e2',
    fontSize: 14,
  },
  selectedShiftButtonText: {
    color: '#fff',
  },
  timeSlotsContainer: {
    padding: 16,
  },
  timeSlotRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 8,
    gap: 8,
  },
  timeSlot: {
    width: timeSlotWidth,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4a90e2',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  selectedTimeSlot: {
    backgroundColor: '#4a90e2',
  },
  disabledTimeSlot: {
    borderColor: '#ccc',
    backgroundColor: '#f0f0f0',
  },
  timeSlotText: {
    color: '#4a90e2',
    fontSize: 12,
    textAlign: 'center',
  },
  selectedTimeSlotText: {
    color: '#fff',
  },
  disabledTimeSlotText: {
    color: '#999',
  },
  nextButton: {
    backgroundColor: '#4a90e2',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  }
})
export default BookVisitAppointment;