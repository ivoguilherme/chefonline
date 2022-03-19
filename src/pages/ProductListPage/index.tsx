import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { Banner, Input, ProductCard, Comment } from '../../components'
import styles from './styles'
import FilterIcon from '../../assets/icons/filter.svg'
import SearchIcon from '../../assets/icons/search.svg'
import { productData, commentData } from '../../data'

export default function ProductListPage() {
  const [search, setSearch] = useState<string>('')
  const handleSearch = (term: any) => setSearch(term.trim())

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewContainer}
      >
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerText}>O que você está procurando?</Text>
            <View style={styles.filterBox}>
              <FilterIcon />
              <Text style={styles.filterText}>Filtro</Text>
            </View>
          </View>

          <View>
            <Input
              placeholder='Pesquise sua comida favorita...'
              onChangeText={handleSearch}
              style={styles.inputSearch}
            />
            <SearchIcon style={styles.searchIcon} />
          </View>
        </View>

        <View style={{ paddingHorizontal: 10 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.title}>Promoção da semana</Text>
            <Banner image={require('../../assets/banner.png')} />
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={styles.title}>Sugestão dos chefs</Text>
            <View style={styles.productList}>
              {productData.map(product => (
                <ProductCard key={product?.id} product={product} />
              ))}
            </View>
          </View>

          <View style={{ marginBottom: 30 }}>
            <Text style={[styles.title, { marginBottom: 10 }]}>
              Recomendações dos clientes
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginHorizontal: -10 }}
            >
              {commentData?.map(({ id, ...props }, index) => {
                const lastIndex = commentData.length - 1

                const firstCommentStyle = index === 0 && { marginLeft: 10 }
                const lastCommentStyle = index === lastIndex && {
                  marginRight: 10,
                }

                return (
                  <Comment
                    key={id}
                    name={props.name}
                    image={props.image}
                    rating={props.rating}
                    containerStyle={[firstCommentStyle, lastCommentStyle]}
                  />
                )
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
