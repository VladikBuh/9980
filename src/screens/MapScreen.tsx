import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { FadeInScreen } from '../components/FadeInScreen';
import { MapArticleCallout } from '../components/map/MapArticleCallout';
import { useArticles } from '../context/ArticlesContext';

import { ARTICLES } from '../data/articles';
import { MAP_LOCATIONS } from '../data/mapLocations';

import { colors, fonts, fontSize, radius, spacing } from '../constants/theme';

type MapScreenProps = {
  onOpenArticle: (articleId: string) => void;
};

const WORLD_REGION = {
  latitude: 8,
  longitude: 20,
  latitudeDelta: 130,
  longitudeDelta: 130,
};

export function MapScreen({ onOpenArticle }: MapScreenProps) {
  const { favoriteIds, toggleFavorite } = useArticles();
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  const activeArticle = activeArticleId
    ? ARTICLES.find(article => article.id === activeArticleId)
    : null;

  return (
    <FadeInScreen style={styles.MapScreenBase}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.MapScreenTopSpacer} />

        <View style={styles.MapScreenHeader}>
          <Text style={styles.MapScreenTitle}>World Map</Text>
          <Text style={styles.MapScreenSubtitle}>Rainforest Locations</Text>
        </View>

        <View style={styles.MapScreenDivider} />

        <View style={styles.MapScreenMapMargin}>
          <View style={styles.MapScreenMapContainer}>
            <MapView style={styles.MapScreenMap} initialRegion={WORLD_REGION}>
              {MAP_LOCATIONS.map(location => (
                <Marker
                  key={location.articleId}
                  coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                  }}
                  pinColor={colors.mapPin}
                  onPress={() => setActiveArticleId(location.articleId)}
                />
              ))}
            </MapView>

            {activeArticle ? (
              <View style={styles.MapScreenCallout} pointerEvents="box-none">
                <MapArticleCallout
                  article={activeArticle}
                  isFavorite={favoriteIds.has(activeArticle.id)}
                  onPress={() => onOpenArticle(activeArticle.id)}
                  onToggleFavorite={() => toggleFavorite(activeArticle.id)}
                  onClose={() => setActiveArticleId(null)}
                />
              </View>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </FadeInScreen>
  );
}

const styles = StyleSheet.create({
  MapScreenBase: {
    backgroundColor: colors.background,
    flex: 1,
  },

  MapScreenTopSpacer: {
    height: 52,
  },
  MapScreenHeader: {
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.l,
  },

  MapScreenTitle: {
    color: colors.accent,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.title,
    fontWeight: '500',
    lineHeight: 28.8,
  },
  MapScreenSubtitle: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.caption,
    marginTop: 4,
  },
  MapScreenDivider: {
    backgroundColor: colors.divider,
    height: 1,
    marginHorizontal: spacing.l,
  },

  MapScreenMapMargin: {
    flex: 1,
    paddingBottom: spacing.l,
    paddingHorizontal: spacing.l,
    paddingTop: spacing.xl,
  },
  MapScreenMapContainer: {
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    flex: 1,
    overflow: 'hidden',
  },
  MapScreenMap: {
    flex: 1,
  },

  MapScreenCallout: {
    justifyContent: 'center',
    left: 0,
    paddingHorizontal: spacing.s,
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -138 }],
  },
});
