import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

const BASE_URL = 'https://nazileakschannel.github.io/agenten-dashboard';

const PAGES = [
  { key: 'dashboard', url: BASE_URL, title: 'Dashboard', icon: '🏠' },
  { key: 'content', url: `${BASE_URL}/content-comm.html`, title: 'Content', icon: '📝' },
  { key: 'bobik', url: `${BASE_URL}/bobik.html`, title: 'Bobik', icon: '🎭' },
  { key: 'setdesign', url: `${BASE_URL}/set-designer.html`, title: 'Set', icon: '🎨' },
  { key: 'video', url: `${BASE_URL}/video-editor.html`, title: 'Video', icon: '🎬' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const currentPageData = PAGES.find(p => p.key === currentPage);

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerText}>🤖 Agenten Dashboard</Text>
      </View>
      <View style={styles.webviewContainer}>
        <WebView source={{ uri: currentPageData.url }} style={styles.webview} />
      </View>
      <View style={styles.navBar}>
        {PAGES.map((page) => (
          <TouchableOpacity
            key={page.key}
            style={[styles.navButton, currentPage === page.key && styles.navButtonActive]}
            onPress={() => setCurrentPage(page.key)}
          >
            <Text style={styles.navIcon}>{page.icon}</Text>
            <Text style={[styles.navText, currentPage === page.key && styles.navTextActive]}>
              {page.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a2e' },
  header: { backgroundColor: '#16213e', paddingTop: 50, paddingBottom: 15, alignItems: 'center' },
  headerText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  webviewContainer: { flex: 1, backgroundColor: '#1a1a2e' },
  webview: { flex: 1, backgroundColor: '#1a1a2e' },
  navBar: { flexDirection: 'row', backgroundColor: '#16213e', paddingBottom: 30, paddingTop: 10 },
  navButton: { flex: 1, alignItems: 'center', paddingVertical: 8 },
  navButtonActive: { backgroundColor: 'rgba(0,212,255,0.2)' },
  navIcon: { fontSize: 24 },
  navText: { color: '#888', fontSize: 10 },
  navTextActive: { color: '#00d4ff', fontWeight: 'bold' },
});
