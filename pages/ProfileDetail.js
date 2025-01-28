import React, { useRef ,useState} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet ,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import for star icons

const BOOKING_TABS=["About", "Reviews"];

const { width } = Dimensions.get('window');
const reviews = [
  {
    id: 1,
    name: 'Askar Milhad',
    rating: 5,
    time: '5d ago',
    review:
      'Lorem ipsum dolor sit amet consectetur. Integer quam nisl eu habitant volutpat pulvinar lectus. A netus integer bibendum volutpat euismod venenatis. Posuere laoreet diam porttito.',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    name: 'Askar Milhad',
    rating: 3,
    time: '5d ago',
    review:
      'Lorem ipsum dolor sit amet consectetur. Integer quam nisl eu habitant volutpat pulvinar lectus. A netus integer bibendum volutpat euismod venenatis. Posuere laoreet diam porttito.',
    avatar: 'https://via.placeholder.com/50',
  },
];
export default function DoctorProfile({ navigation }) {
  const scrollViewRef = useRef(null);
  const [activeTab, setActiveTab] = useState("About");

  return (
    <View style={styles.container}>
      {/* Main Scrollable Content */}
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>{'<'}</Text>
          </TouchableOpacity>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
          <Text style={styles.name}>James Carlice</Text>
          <Text style={styles.speciality}>Cardiologist</Text>
          <View style={styles.statsContainer}>
            <Text style={styles.statText}>Experience{'\n'}<Text style={styles.statValue}>15+ Years</Text></Text>
            <View style={styles.verticalLine} />
            <Text style={styles.statText}>Rating{'\n'}<Text style={styles.statValue}>4.5 ★</Text></Text>
            <View style={styles.verticalLine} />
            <Text style={styles.statText}>Consultations{'\n'}<Text style={styles.statValue}>1385</Text></Text>
          </View>
        </View>

      
        <View style={styles.tabContainer}>
              {BOOKING_TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.tabButton}
            onPress={() => setActiveTab(tab)}
          >
            <View
              style={[
                styles.tabContent,
                activeTab === tab && styles.activeTabContent,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
              </View>
        {activeTab=='About'?
        <View style={styles.content}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Ornare diam turpis et tellus. Mauris egestas arcu id egestas...
        </Text>

        {/* Additional Info */}
       
        <View style={styles.tagContainer}>
        <Text style={styles.sectionTitle}>Hospitals/Clinic:</Text>
        <Text style={styles.tag}>Medanta</Text>
        
        </View>
        <View style={styles.tagContainer}>
        <Text style={styles.sectionTitle}>Hospitals/Clinic:</Text>
        <Text style={styles.tag}>Apollo Medics</Text>
        </View>

   
        <View style={styles.tagContainer}>
        <Text style={styles.sectionTitle}>Languages:</Text>
     
          <Text style={styles.tag}>Hindi</Text>
          <Text style={styles.tag}>Urdu</Text>
          <Text style={styles.tag}>English</Text>
        </View>

        <Text style={styles.bookVisitFee}>Book Visit Fee: <Text style={styles.fee}>₹ 500</Text></Text>

        <Text style={styles.location}>📍 Lucknow, Uttar Pradesh</Text>

        <Text style={styles.sectionTitle}>Specialization/Certificate:</Text>
        <View style={styles.textBox} />
      </View>: <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Rating Summary */}
        <View style={styles.ratingSummary}>
          <Text style={styles.ratingNumber}>4.5</Text>
          <Text style={styles.reviewCount}>123 Reviews</Text>
        </View>

        {/* Star Breakdown */}
        <View style={styles.ratingBreakdown}>
          {[5, 4, 3, 2, 1].map((stars, index) => (
            <View key={index} style={styles.ratingRow}>
              <FontAwesome name="star" size={14} color="gold" />
              <Text style={styles.ratingText}>{stars}</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${stars * 20}%` }]} />
              </View>
            </View>
          ))}
        </View>

        {/* Reviews List */}
        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Image source={{ uri: review.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.reviewerName}>{review.name}</Text>
                <View style={styles.starsRow}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FontAwesome
                      key={i}
                      name={i < review.rating ? 'star' : 'star-o'}
                      size={14}
                      color="gold"
                    />
                  ))}
                  <Text style={styles.reviewTime}>{review.time}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.reviewText}>{review.review}</Text>
          </View>
        ))}
      </ScrollView>
        }
        
      </ScrollView>

     
      <View style={styles.footer}>
        <TouchableOpacity style={styles.priceButton}>
          <Text style={styles.priceText}>📞 Call ₹ 25/Min</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.priceButton}>
          <Text style={styles.priceText}>💬 Chat ₹ 15/Min</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.callButtonText}>Call/Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Visit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { paddingBottom: 120 }, // Ensures content is scrollable above footer

  // Header
  header: { alignItems: 'center', paddingVertical: 20 },
  backButton: { position: 'absolute', left: 10, top: 10, padding: 10 },
  backText: { fontSize: 24 },
  profileImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  name: { fontSize: 16, fontWeight: 600,color:'#555B61' },
  speciality: { color: '#2C85C7' },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 10 },
  statText: { textAlign: 'center', fontSize: 16,fontWeight:700,color:'#39434C' },
  statValue: { fontWeight: 600, fontSize: 16,color:'#2C85C7' },
  verticalLine: {
    width: 1, 
    height: '70%',
    backgroundColor: '#7C92A6',
    alignSelf:'center'
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF", // Required for shadow to be visible
    borderRadius: 8, // Optional for a softer effect
    shadowColor: "rgba(191, 191, 191, 0.25)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5, 
  },
  tabButton: {
    flex: 1, // Ensures equal spacing for all tabs
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    paddingVertical:10,
    fontSize: 16,
    color: '#7C92A6',
  },
  activeTabContent: {
    width: width / BOOKING_TABS.length,
    borderBottomWidth: 2,
    borderBottomColor: '#2C85C7',
  },
  activeTabText: {
    color: '#2C85C7', 
    fontWeight: 'bold',
  },



  // Content
  content: { padding: 16 },
  description: { fontSize: 14, color: '#595959', lineHeight: 18, marginBottom: 10 },
  sectionTitle: { fontWeight: 'bold', marginTop: 10, color:'#39434C'},
  tagContainer: { flexDirection: 'row', gap: 8, marginVertical: 5 },
  tag: { paddingVertical: 8, paddingHorizontal: 16, backgroundColor: '#fff', borderRadius: 16,borderColor:'#2C85C7',borderWidth:1, fontSize: 14,color:'#2C85C7' },
  bookVisitFee:{color:'#595959',fontWeight:600,fontSize:16,marginTop:10},
  fee: { fontSize: 16, color: 'black', fontWeight: 'bold' },
  textBox: { height: 60, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginTop: 5 },

  // Footer (Fixed at Bottom)
  footer: { flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 12,paddingTop:12, borderTopWidth: 1, borderColor: '#ddd', backgroundColor: '#fff' },
  priceButton: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20, borderWidth: 1, borderColor: '#2C85C7' },
  priceText: { fontSize: 16, color: '#2C85C7' },

  footerButtons: { flexDirection: 'row', justifyContent: 'space-around', padding: 12, backgroundColor: '#fff' },
  callButton: { flex: 1, backgroundColor: '#00D965', paddingVertical: 12, alignItems: 'center', marginHorizontal: 5, borderRadius: 10 },
  bookButton: { flex: 1, backgroundColor: '#2C85C7', paddingVertical: 12, alignItems: 'center', marginHorizontal: 5, borderRadius: 10 },
  callButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  bookButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  location:{
    color:'#7C92A6',
    fontSize:16,
    marginVertical:10
  },





  ratingSummary: { alignItems: 'center', marginVertical: 10 },
  ratingNumber: { fontSize: 40, fontWeight: 'bold' },
  reviewCount: { fontSize: 16, color: '#666' },

  // Star Breakdown
  ratingBreakdown: { paddingHorizontal: 20 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 3 },
  ratingText: { marginLeft: 5, fontSize: 14, fontWeight: 'bold' },

  reviewCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  reviewHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  reviewerName: { fontSize: 16, fontWeight: 'bold' },
  starsRow: { flexDirection: 'row', alignItems: 'center', marginTop: 3 },
  reviewTime: { marginLeft: 5, fontSize: 12, color: '#666' },
  reviewText: { fontSize: 14, color: '#444', marginTop: 5 },
});
