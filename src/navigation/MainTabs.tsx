import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {TabBar} from '../components/nav/TabBar';
import {AnimalsProvider} from '../context/AnimalsContext';
import {ArticlesProvider} from '../context/ArticlesContext';
import {PlantsProvider} from '../context/PlantsContext';
import {ANIMALS} from '../data/animals';
import {ARTICLES} from '../data/articles';
import {PLANTS} from '../data/plants';
import {AnimalDetailScreen} from '../screens/AnimalDetailScreen';
import {AnimalsScreen} from '../screens/AnimalsScreen';
import {ArticleDetailScreen} from '../screens/ArticleDetailScreen';
import {ArticlesScreen} from '../screens/ArticlesScreen';
import {FavoritesScreen} from '../screens/FavoritesScreen';
import {MapScreen} from '../screens/MapScreen';
import {PlantDetailScreen} from '../screens/PlantDetailScreen';
import {PlantsScreen} from '../screens/PlantsScreen';
import {QuizFlow} from '../screens/QuizFlow';
import {colors} from '../constants/theme';

import type {TabKey} from './types';

export function MainTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>('Jungle');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(
    null,
  );
  const [selectedAnimalId, setSelectedAnimalId] = useState<string | null>(
    null,
  );
  const [selectedPlantId, setSelectedPlantId] = useState<string | null>(
    null,
  );

  const handleSelectTab = (tab: TabKey) => {
    setSelectedArticleId(null);
    setSelectedAnimalId(null);
    setSelectedPlantId(null);
    setActiveTab(tab);
  };

  const selectedArticle = selectedArticleId
    ? ARTICLES.find(article => article.id === selectedArticleId)
    : null;

  const selectedAnimal = selectedAnimalId
    ? ANIMALS.find(animal => animal.id === selectedAnimalId)
    : null;

  const selectedPlant = selectedPlantId
    ? PLANTS.find(plant => plant.id === selectedPlantId)
    : null;

  const renderContent = () => {
    if (activeTab === 'Jungle') {
      if (selectedArticle) {
        return (
          <ArticleDetailScreen
            article={selectedArticle}
            onBack={() => setSelectedArticleId(null)}
          />
        );
      }
      return <ArticlesScreen onSelectArticle={setSelectedArticleId} />;
    }

    if (activeTab === 'Animals') {
      if (selectedAnimal) {
        return (
          <AnimalDetailScreen
            animal={selectedAnimal}
            onBack={() => setSelectedAnimalId(null)}
          />
        );
      }
      return <AnimalsScreen onSelectAnimal={setSelectedAnimalId} />;
    }

    if (activeTab === 'Plants') {
      if (selectedPlant) {
        return (
          <PlantDetailScreen
            plant={selectedPlant}
            onBack={() => setSelectedPlantId(null)}
          />
        );
      }
      return <PlantsScreen onSelectPlant={setSelectedPlantId} />;
    }

    if (activeTab === 'Favorites') {
      if (selectedArticle) {
        return (
          <ArticleDetailScreen
            article={selectedArticle}
            onBack={() => setSelectedArticleId(null)}
          />
        );
      }
      if (selectedAnimal) {
        return (
          <AnimalDetailScreen
            animal={selectedAnimal}
            onBack={() => setSelectedAnimalId(null)}
          />
        );
      }
      if (selectedPlant) {
        return (
          <PlantDetailScreen
            plant={selectedPlant}
            onBack={() => setSelectedPlantId(null)}
          />
        );
      }
      return (
        <FavoritesScreen
          onSelectArticle={setSelectedArticleId}
          onSelectAnimal={setSelectedAnimalId}
          onSelectPlant={setSelectedPlantId}
          onExplore={category => {
            handleSelectTab(
              category === 'jungles'
                ? 'Jungle'
                : category === 'animals'
                ? 'Animals'
                : 'Plants',
            );
          }}
        />
      );
    }

    if (activeTab === 'Map') {
      if (selectedArticle) {
        return (
          <ArticleDetailScreen
            article={selectedArticle}
            onBack={() => setSelectedArticleId(null)}
          />
        );
      }
      return <MapScreen onOpenArticle={setSelectedArticleId} />;
    }

    return <QuizFlow />;
  };

  return (
    <ArticlesProvider>
      <AnimalsProvider>
        <PlantsProvider>
          <View style={styles.MainTabsBase}>
            <View style={styles.MainTabsContent}>{renderContent()}</View>
            <TabBar activeTab={activeTab} onSelect={handleSelectTab} />
          </View>
        </PlantsProvider>
      </AnimalsProvider>
    </ArticlesProvider>
  );
}

const styles = StyleSheet.create({
  MainTabsBase: {
    backgroundColor: colors.background,
    flex: 1,
  },
  MainTabsContent: {
    flex: 1,
  },
});
