import { Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Banner, Input, ProductCard } from "../../components"
import { styles } from "./styles"
import FilterIcon from '../../assets/icons/filter.svg'
import SearchIcon from '../../assets/icons/search.svg'
import { useState } from "react"
import { productData } from "../../data"

export const ProductListPage = () => {
  const [search, setSearch] = useState<string>('')

  const handleSearch = (term: any) => setSearch(term.trim())

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerText}>
              O que você está procurando?
            </Text>
            <View style={styles.filterBox}>
              <FilterIcon />
              <Text style={styles.filterText}>Filtro</Text>
            </View>
          </View>

          <View>
            <Input
              placeholder="Pesquise sua comida favorita..."
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

          <View>
            <Text style={styles.title}>Sugestão dos chefs</Text>
            <View style={styles.productList}>
              {productData.map((product) => (
                <ProductCard key={product?.id} product={product} />
              ))}
            </View>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}