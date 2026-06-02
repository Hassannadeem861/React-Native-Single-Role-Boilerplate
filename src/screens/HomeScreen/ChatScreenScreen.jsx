import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SettingsScreenWrapper from '../../components/SettingsScreenWrapper.jsx';
import colors from '../../utils/color.js';
import { FONTS } from '../../utils/fonts.js';
import { vh } from '../../utils/responsive.js';

const AVATAR_URL =
  'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=100&h=100&fit=crop&crop=face';

const chatItems = [
  { id: '1', title: 'Group Chat', message: 'Moose might be close. Be ready.', time: 'Now',        unread: true },
  { id: '2', title: 'Group Chat', message: 'Moose might be close. Be ready.', time: 'Now',        unread: true },
  { id: '3', title: 'Group Chat', message: 'Moose might be close. Be ready.', time: '01:04 pm',   unread: false },
  { id: '4', title: 'Group Chat', message: 'Moose might be close. Be ready.', time: '02:54 pm',   unread: false },
  { id: '5', title: 'Group Chat', message: 'Moose might be close. Be ready.', time: '06:25 am',   unread: false },
  { id: '6', title: 'Group Chat', message: 'Moose might be close. Be ready.', time: 'yesterday',  unread: false },
  { id: '7', title: 'Group Chat', message: 'Moose might be close. Be ready.', time: 'yesterday',  unread: false },
  { id: '8', title: 'Group Chat', message: 'Moose might be close. Be ready.', time: 'yesterday',  unread: false },
];

const ChatItem = ({ item, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.75}
    style={[styles.chatItem, item.unread && styles.chatItemActive]}
  >
    <View style={[styles.avatarBox, item.unread && styles.avatarBoxActive]}>
      <Image
        source={{ uri: AVATAR_URL }}
        style={styles.avatarImage}
        resizeMode="cover"
      />
      {item.unread && <View style={styles.onlineDot} />}
    </View>

    <View style={styles.chatTextGroup}>
      <Text
        style={[styles.chatTitle, item.unread && styles.chatTitleActive]}
        numberOfLines={1}
      >
        {item.title}
      </Text>
      <Text
        style={[styles.chatSubtitle, item.unread && styles.chatSubtitleActive]}
        numberOfLines={1}
      >
        {item.message}
      </Text>
    </View>

    <View style={styles.chatMeta}>
      <Text style={[styles.chatTime, item.unread && styles.chatTimeActive]}>
        {item.time}
      </Text>
      {item.unread && <View style={styles.unreadBadge} />}
    </View>
  </TouchableOpacity>
);

const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <SettingsScreenWrapper style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.pageTitle}>Messages</Text>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors.textHint}
            style={styles.searchInput}
          />
        </View>

        <View style={styles.chatRowList}>
          {chatItems.map((item) => (
            <ChatItem
              key={item.id}
              item={item}
              onPress={() => navigation.navigate('group_chat_screen')}
            />
          ))}
        </View>
      </ScrollView>
    </SettingsScreenWrapper>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, paddingHorizontal: 16 },

  scrollContent: { paddingBottom: 40 },

  pageTitle: {
    marginTop: vh(2),
    color: colors.white,
    fontFamily: FONTS.display_bold,
    fontSize: 26,
    marginBottom: vh(2.5),
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: vh(2),
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 8,
    opacity: 0.5,
  },
  searchInput: {
    flex: 1,
    color: colors.white,
    fontFamily: FONTS.display_regular,
    fontSize: 14,
    padding: 0,
  },

  chatRowList: { marginBottom: vh(2) },

  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 20,
    padding: 12,
    marginBottom: 10,
  },
  chatItemActive: {
    backgroundColor: colors.primary[0],
  },

  avatarBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    overflow: 'visible',
    marginRight: 12,
    position: 'relative',
  },
  avatarBoxActive: {},
  avatarImage: {
    width: 52,
    height: 52,
    borderRadius: 16,
  },
  onlineDot: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#1DB954',
    borderWidth: 2,
    borderColor: '#0a1a0d',
  },

  chatTextGroup: { flex: 1 },

  chatTitle: {
    color: colors.white,
    fontFamily: FONTS.display_bold,
    fontSize: 15,
  },
  chatTitleActive: { color: '#091208' },

  chatSubtitle: {
    color: colors.textHint,
    fontFamily: FONTS.display_regular,
    marginTop: 3,
    fontSize: 13,
  },
  chatSubtitleActive: { color: 'rgba(9,18,8,0.7)' },

  chatMeta: {
    alignItems: 'flex-end',
    marginLeft: 8,
    gap: 6,
  },
  chatTime: {
    color: colors.textHint,
    fontSize: 11,
    fontFamily: FONTS.display_regular,
  },
  chatTimeActive: { color: 'rgba(9,18,8,0.65)' },
  unreadBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#091208',
    marginTop: 2,
  },
});