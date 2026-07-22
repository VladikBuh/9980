import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { tabIcons } from '../../data/assets';
import { colors, fonts } from '../../constants/theme';

import type { TabKey } from '../../navigation/types';

type TabBarProps = {
  activeTab: TabKey;
  onSelect: (tab: TabKey) => void;
};

const TABS: { key: TabKey; label: string }[] = [
  { key: 'Jungle', label: 'Jungle' },
  { key: 'Map', label: 'Map' },
  { key: 'Animals', label: 'Animals' },
  { key: 'Plants', label: 'Plants' },
  { key: 'Quiz', label: 'Quiz' },
  { key: 'Favorites', label: 'Favorites' },
];

export function TabBar({ activeTab, onSelect }: TabBarProps) {
  return (
    <View style={styles.TabBarBase}>
      {TABS.map(tab => {
        const isActive = tab.key === activeTab;

        return (
          <Pressable
            key={tab.key}
            style={styles.TabBarButton}
            onPress={() => onSelect(tab.key)}
          >
            <Image
              source={tabIcons[tab.key][isActive ? 'active' : 'inactive']}
              style={styles.TabBarIcon}
            />
            <Text
              style={[
                styles.TabBarLabel,
                { color: isActive ? colors.tabActive : colors.tabInactive },
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  TabBarBase: {
    backgroundColor: colors.tabBarBg,
    borderTopColor: colors.divider,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingBottom: 20,
    paddingTop: 1,
  },

  TabBarButton: {
    alignItems: 'center',
    flex: 1,
    gap: 3,
    justifyContent: 'center',
    paddingBottom: 4,
    paddingTop: 10,
  },
  TabBarIcon: {
    height: 22,
    width: 22,
  },

  TabBarLabel: {
    fontFamily: fonts.sansMedium,
    fontSize: 10,
    fontWeight: '500',
  },
});
