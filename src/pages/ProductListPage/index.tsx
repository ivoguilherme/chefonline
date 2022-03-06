import { FlatList, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Input, ProductCard } from "../../components"
import { styles } from "./styles"
import FilterIcon from '../../assets/icons/filter.svg'
import SearchIcon from '../../assets/icons/search.svg'
import { useState } from "react"
import { productData } from "./data"

export const ProductListPage = () => {
  const [search, setSearch] = useState<string>('')

  const handleSearch = (term: any) => setSearch(term.trim())

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'hsla(0, 0%, 84%, 1)' }}>
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
              style={{ width: '100%', paddingRight: 50 }}
            />
            <SearchIcon style={{ position: 'absolute', right: 20, top: 16 }} />
          </View>

        </View>

        <View style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 10
        }}>
          {productData.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </View>

        <View style={{ height: 100 }}>
          <Text>Ou</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}