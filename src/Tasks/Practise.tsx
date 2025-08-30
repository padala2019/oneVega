import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';

const Accordion = ({ data }: any) => {
  const [expandedId, setExpandedId] = useState(null);
  //   const animation = useRef(new Animated.Value(0)).current;

  const toggleAccordion = (id: any) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      {data.map((item: any) => (
        <View key={item.id} style={styles.accordionItem}>
          <TouchableOpacity
            onPress={() => toggleAccordion(item.id)}
            style={styles.accordionHeader}
          >
            <Text style={styles.accordionTitle}>{item.title}</Text>
            <Text>{expandedId === item.id ? '-' : '+'}</Text>
          </TouchableOpacity>
          {expandedId === item.id && (
            <View style={styles.accordionContent}>
              <Text>{item.content}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const Practise = () => {
  const accordionData = [
    {
      id: '1',
      title: 'What is React Native?',
      content:
        'React Native is an open-source mobile application framework created by Facebook.',
    },
    {
      id: '2',
      title: 'How does it work?',
      content:
        'It allows developers to use React along with native platform capabilities.',
    },
    {
      id: '3',
      title: 'Why use React Native?',
      content:
        'It enables cross-platform development, saving time and resources.',
    },
  ];

  return (
    <View>
      <Accordion data={accordionData} />
    </View>
  );
};

export default Practise;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  accordionItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden', // Important for content not to overflow during animation
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f0f0',
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  accordionContent: {
    padding: 15,
    backgroundColor: '#fff',
  },
});
