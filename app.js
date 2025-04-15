// 数据存储
const defaultData = {
    takeaway: [
        // 快餐连锁
        "麦当劳", "肯德基", "必胜客", "德克士", "汉堡王", "华莱士", "老乡鸡", "棒约翰",
        "吉野家", "永和大王", "真功夫", "西贝莜面村", "味千拉面", "巴贝拉", "和府捞面",  
        // 中式快餐
        "沙县小吃", "黄焖鸡米饭", "兰州拉面", "重庆小面", "螺蛳粉", "过桥米线", "肯德基",
        "西少爷肉夹馍", "南京大牌档", "杨国福麻辣烫", "张亮麻辣烫", "黄记煌三汁焖锅",
        // 米饭系列
        "盖浇饭", "煲仔饭", "烤肉饭", "黄焖鸡米饭", "鸡排饭", "鳗鱼饭", "照烧鸡饭",
        "宫保鸡丁饭", "回锅肉饭", "木须肉饭", "酸菜鱼饭", "咖喱牛肉饭", "番茄牛腩饭",
        // 面食系列
        "牛肉面", "炸酱面", "葱油拌面", "阳春面", "担担面", "麻辣烫", "热干面", 
        "刀削面", "油泼面", "炒刀削", "酸辣粉", "米粉", "沙茶面", "打卤面",
        // 日韩料理
        "寿司", "生鱼片", "天妇罗", "拉面", "冷面", "石锅拌饭", "部队火锅", "烤肉",
        // 异域风情
        "泰式炒河粉", "越南河粉", "印度咖喱", "墨西哥卷饼", "沙拉", "汉堡", "意面", "披萨",
        // 火锅轻食
        "火锅", "小火锅", "麻辣香锅", "冒菜", "关东煮", "烧烤", "酸菜鱼", "水煮鱼",
        // 早餐系列
        "煎饼果子", "油条豆浆", "生煎包", "灌汤包", "肠粉", "肉夹馍", "手抓饼", "豆腐脑"
    ],
    cuisines: {
        "川菜": [
            "麻婆豆腐", "回锅肉", "宫保鸡丁", "鱼香肉丝", "水煮鱼", "水煮牛肉", "辣子鸡",
            "夫妻肺片", "酸菜鱼", "干煸四季豆", "川北凉粉", "担担面", "钟水饺", "龙抄手",
            "蒜泥白肉", "口水鸡", "东坡肉", "鱼香茄子", "粉蒸肉", "干煸豆角", "泡椒凤爪",
            "啤酒鸭", "辣子鸡丁", "棒棒鸡", "叶儿粑", "麻辣兔头", "怪味鸡", "锅巴肉片"
        ],
        "粤菜": [
            "白切鸡", "烧鹅", "叉烧", "烧腊", "清蒸鱼", "蜜汁叉烧", "虾饺", "肠粉",
            "烧卖", "蛋挞", "红米肠粉", "咸鱼茄子煲", "荷叶糯米鸡", "蚝油牛肉", "菠萝咕咾肉",
            "龙虎斗", "冰镇乳鸽", "窝蛋牛肉", "豉汁蒸排骨", "牛腩煲", "萝卜牛腩", "干炒牛河",
            "葱油鸡", "白灼虾", "咕噜肉", "椰汁西米露", "焖猪手", "蜜汁火方", "梅菜扣肉"
        ],
        "苏菜": [
            "松鼠桂鱼", "阳春面", "干炸响铃", "无锡排骨", "鸭血粉丝汤", "赤豆元宵", 
            "大煮干丝", "南京盐水鸭", "清炖蟹粉狮子头", "三套鸭", "水晶肴肉", "金陵烤鸭",
            "苏式月饼", "扬州炒饭", "百花酿甜椒", "南京鸭血粉丝汤", "镇江肴肉", "苏州酱排骨",
            "虾子大烩", "苏州汤包", "无锡肉骨头", "腌笃鲜", "蟹粉豆腐", "油爆虾", "松鼠鳜鱼"
        ],
        "鲁菜": [
            "葱烧海参", "糖醋鲤鱼", "德州扒鸡", "九转大肠", "糖醋里脊", "油焖大虾",
            "清蒸螃蟹", "红烧海螺", "蟹黄鱼翅", "火烧明虾", "油爆双脆", "拔丝山药",
            "清汤燕菜", "软炸鲜贝", "清蒸鲅鱼", "炒鸡肝", "红扒海螺", "葱烧活鲤鱼",
            "原壳鲍鱼", "白扒鱼翅", "泰安卤子鸡", "山东煎饼", "胶东大包子", "蒜茸粉丝蒸扇贝"
        ],
        "浙菜": [
            "西湖醋鱼", "东坡肉", "龙井虾仁", "宋嫂鱼羹", "叫化鸡", "生煎鳗鱼", 
            "杭州酱鸭", "干炸响铃", "油焖笋", "红烧素鹅", "杭三鲜", "干菜焖肉",
            "霉干菜烧肉", "清蒸鲈鱼", "姑嫂鱼羹", "糟鸡", "菊花火腿", "金华酥饼",
            "绍兴醉蟹", "杭州卤鸭", "开洋葱油芥菜", "嵊州小吃", "宁波汤圆", "温州鱼丸"
        ],
        "湘菜": [
            "剁椒鱼头", "腊味合蒸", "麻辣子鸡", "农家小炒肉", "擂辣椒皮蛋", "湘西泡菜炒肉",
            "铁板牛柳", "干煸大虾", "香辣蟹", "小炒黄牛肉", "毛氏红烧肉", "虎皮青椒", 
            "腊肉炒豆角", "酸辣土豆丝", "椒盐排骨", "糍粑辣椒", "炒青菜", "剁椒蒸腊肉",
            "炸肉丸子", "盖菜饭", "血浆鸭", "腌鲊鱼头", "长沙米粉", "湘西外婆菜"
        ],
        "徽菜": [
            "臭鳜鱼", "符离集烧鸡", "火腿炖甲鱼", "腌鲜鳜鱼", "徽州炖鸡", "黄山炖鸽",
            "石耳炖鸡", "瓦罐汤", "毛豆腐", "休宁小炒", "清蒸石鸡", "徽州毛豆腐",
            "黄山三美", "一品锅", "桃花鱼", "徽州三宝", "胡辣汤", "麻辣肚条",
            "徽州烧饼", "祁门茶干", "鸡汤烧韭菜", "桐城小花糕", "舒城小仓酥", "砀山酥梨"
        ],
        "闽菜": [
            "佛跳墙", "沙茶面", "海蛎煎", "福州鱼丸", "厦门海蛎煎", "厦门炒面线",
            "鼎边糊", "淡糟香螺片", "南煎肝片", "土笋冻", "泉州卤面", "芋泥",
            "荔枝肉", "烧肉粽", "闽南咸饭", "烧刀比", "肉燕", "麻疯鸡",
            "醋醃芥菜", "花雕蟹", "胡兰头", "叶包", "酿芋头", "醉香鸡"
        ],
        "京菜": [
            "北京烤鸭", "炒肝", "爆肚", "糖耳条", "炸灌肠", "焦圈", "芥末墩儿",
            "涮羊肉", "褡裢火烧", "姜汁热奶", "艾窝窝", "北京豆汁", "面茶",
            "北京烧饼", "卤煮火烧", "冰糖葫芦", "豆面酥糖", "豆汁儿", "豌豆黄",
            "炸酱面", "肉末烧汁茄子", "宫爆鸡丁", "京酱肉丝", "四季豆炒肉末"
        ],
        "晋菜": [
            "过油肉", "太原牛肉板面", "莜面窝窝", "剔尖", "山西刀削面", "山西面引子",
            "晋味熏肉", "过油盘肝", "烤肉王", "太谷饼", "左权羊汤", "碗秃",
            "临县小米饭", "八珍豆腐", "四喜丸子", "老陈醋", "平遥牛肉", "灌肠",
            "豆腐脑", "猫耳朵", "山西扯面", "柳叶饺子", "蒸饺", "灯影牛肉"
        ],
        "豫菜": [
            "烩面", "胡辣汤", "道口烧鸡", "羊肉烩", "焖饼", "烩菜", 
            "炒三不粘", "清汤土豆丝", "糊辣汤", "开封灌汤包", "胡萝卜烧羊肉", "红烧兔肉",
            "烧茄子", "扣碗", "爆炒腰花", "芝麻糖卷", "软麻花", "烧饼刀削",
            "汴京狗肉", "二氧化碳馒头", "炸鲂鱼", "油旋", "炸山药", "煎饺"
        ],
        "渝菜": [
            "重庆火锅", "毛血旺", "辣子鸡", "水煮牛肉", "糍粑辣椒", "怪味鸡",
            "泡椒凤爪", "酸菜鱼", "红烧肉", "烤鱼", "江湖菜", "冷吃兔",
            "白油鲤鱼", "重庆烤鱼", "麻辣小龙虾", "麻辣火锅", "宫保鸡丁", "粉蒸肉",
            "豆花", "担担面", "重庆小面", "酸辣粉", "陈麻花", "山城小汤圆"
        ],
        "鄂菜": [
            "清蒸武昌鱼", "三鲜豆皮", "糍粑鱼", "排骨藕汤", "莲藕排骨汤", "清炖官燕",
            "藕带", "热干面", "鸭脖子", "欢喜坨", "珍珠丸子", "口味虾", 
            "鱼香肉丝", "孔雀开屏鱼", "红烧野鸡", "黄陂三合汤", "洪湖莲藕", "公安甜米酒",
            "潜江油焖大虾", "洪湖藕带", "当阳野藕", "松滋刁子鱼", "咸宁桂花鱼"
        ],
        "潮菜": [
            "潮州卤鹅", "白切鸡", "卤水拼盘", "沙茶牛肉", "蚝烙", "鲎边",
            "炒冬粉", "猪脚饭", "潮州鱼丸", "卤水鹅", "蠔烙", "潮州春饼",
            "姜母鸭", "琵琶虾", "砂锅粥", "潮式卤鹅", "虾枣", "鱼饺",
            "芋泥蒸排骨", "薄壳", "壳腰", "鸭母捻", "凉瓜炒蛋", "炸肉饺"
        ],
        "滇菜": [
            "过桥米线", "汽锅鸡", "黄焖鸡", "气锅猪蹄", "宣威火腿", "云腿削皮",
            "乳扇", "米线", "酸汤鱼", "竹筒饭", "牛干巴", "树花炒肉",
            "洱海银鱼", "白族三道茶", "昆明饵块", "烧饵块", "雕梅", "雨过天晴",
            "云南小锅米线", "大理石板烤肉", "丽江粑粑", "云南小瓜", "玫瑰卷糕"
        ],
        "赣菜": [
            "瓦罐汤", "客家酿豆腐", "南昌炒粉", "胡椒炖猪肚", "庐山蒸鸡", "风味馓子",
            "腊味合蒸", "南昌米粉", "钓草鱼", "庐山三石宴", "八宝砂锅", "石头豆腐",
            "萝卜糕", "抓井", "九江锅饼", "莲花血鸭", "萍乡百花生", "大余火腿",
            "瑞金狗肉", "南丰蜜桔", "九江米粉", "浮梁饼", "玉山茶", "婺源茶叶"
        ],
        "客家菜": [
            "盐焗鸡", "酿豆腐", "梅菜扣肉", "酿苦瓜", "客家酿豆腐", "薯粉饺",
            "客家酿三宝", "姜黄粄", "黄酒煮蛋", "黄鳝炖鸡", "红炆肉", "五色饭",
            "艾叶粄", "四色粄", "酿灯笼椒", "糟鸡", "生爆鱼", "盐卤豆腐",
            "客家焖猪肉", "腌酸瓜", "橄榄菜", "客家娘酒", "酿南瓜", "猪肉丸"
        ]
    },
    randomSelections: [
        "麦当劳", "肯德基", "水煮鱼", "小火锅", "烤肉", "过桥米线", 
        "麻辣烫", "沙拉", "鱼香肉丝", "意面", "热干面", "寿司",
        "黄焖鸡米饭", "盖浇饭", "酸菜鱼", "宫保鸡丁", "炸酱面", "辣子鸡"
    ],
    history: [],
    // 默认菜系列表，用于标识哪些是系统默认菜系
    defaultCuisines: ["川菜", "粤菜", "苏菜", "鲁菜", "浙菜", "湘菜", "徽菜", "闽菜", "京菜", "晋菜", "豫菜", "渝菜", "鄂菜", "潮菜", "滇菜", "赣菜", "客家菜"]
};

// 初始化数据
let appData = JSON.parse(localStorage.getItem('eatTodayApp')) || JSON.parse(JSON.stringify(defaultData));

// 确保默认菜系列表存在
if (!appData.defaultCuisines) {
    appData.defaultCuisines = defaultData.defaultCuisines;
    saveData();
}

// DOM元素
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const foodDisplay = document.getElementById('food-display');
const startRandomBtn = document.getElementById('start-random');
const startRandomAllBtn = document.getElementById('start-random-all');
const editFoodsBtn = document.getElementById('edit-foods');
const resetDefaultsBtn = document.getElementById('reset-defaults');
const editTakeawayBtn = document.getElementById('edit-takeaway');
const editCuisinesBtn = document.getElementById('edit-cuisines');
const editModal = document.getElementById('edit-modal');
const editTakeawayModal = document.getElementById('edit-takeaway-modal');
const editCuisinesModal = document.getElementById('edit-cuisines-modal');
const addCuisineModal = document.getElementById('add-cuisine-modal');
const editCuisineModal = document.getElementById('edit-cuisine-modal');
const confirmModal = document.getElementById('confirm-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const newFoodInput = document.getElementById('new-food');
const newTakeawayInput = document.getElementById('new-takeaway');
const newCuisineFoodInput = document.getElementById('new-cuisine-food');
const newCuisineNameInput = document.getElementById('new-cuisine-name');
const editCuisineNameInput = document.getElementById('edit-cuisine-name');
const cuisineSelect = document.getElementById('cuisine-select');
const addFoodBtn = document.getElementById('add-food');
const addTakeawayBtn = document.getElementById('add-takeaway');
const addCuisineFoodBtn = document.getElementById('add-cuisine-food');
const addCuisineTypeBtn = document.getElementById('add-cuisine-type');
const editCuisineTypeBtn = document.getElementById('edit-cuisine-type');
const deleteCuisineTypeBtn = document.getElementById('delete-cuisine-type');
const saveNewCuisineBtn = document.getElementById('save-new-cuisine');
const cancelNewCuisineBtn = document.getElementById('cancel-new-cuisine');
const saveEditCuisineBtn = document.getElementById('save-edit-cuisine');
const cancelEditCuisineBtn = document.getElementById('cancel-edit-cuisine');
const saveFoodSelectionsBtn = document.getElementById('save-food-selections');
const saveTakeawaySelectionsBtn = document.getElementById('save-takeaway-selections');
const saveCuisineSelectionsBtn = document.getElementById('save-cuisine-selections');
const foodSelectionsList = document.getElementById('food-selections');
const takeawaySelectionsList = document.getElementById('takeaway-selections');
const cuisineFoodSelectionsList = document.getElementById('cuisine-food-selections');
const tabBtns = document.querySelectorAll('.tab-btn');
const takeawayTab = document.getElementById('takeaway-tab');
const cuisinesTab = document.getElementById('cuisines-tab');
const confirmMessage = document.getElementById('confirm-message');
const confirmYesBtn = document.getElementById('confirm-yes');
const confirmNoBtn = document.getElementById('confirm-no');

// 确认操作类型
let confirmAction = '';
let currentCuisineToDelete = '';
let oldCuisineName = '';
let newCuisineName = '';

// 初始化
function init() {
    renderTakeawayPage();
    renderCuisinesPage();
    renderHistoryPage();
    
    // 检查URL hash并导航到相应页面
    checkUrlAndNavigate();
    
    // 注册事件监听
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            navigateTo(targetPage);
            // 更新URL hash
            window.location.hash = targetPage;
        });
    });
    
    // 监听hash变化事件
    window.addEventListener('hashchange', checkUrlAndNavigate);
    
    startRandomBtn.addEventListener('click', startRandomSelection);
    startRandomAllBtn.addEventListener('click', startRandomAllSelection);
    editFoodsBtn.addEventListener('click', openEditModal);
    editTakeawayBtn.addEventListener('click', openEditTakeawayModal);
    editCuisinesBtn.addEventListener('click', openEditCuisinesModal);
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal && modal.id) {
                closeModalById(modal.id);
            } else {
                // 如果找不到modal或id，尝试从按钮的data-modal属性获取
                const modalId = this.getAttribute('data-modal');
                if (modalId) {
                    closeModalById(modalId);
                }
            }
        });
    });
    
    // 菜系管理
    addCuisineTypeBtn.addEventListener('click', openAddCuisineModal);
    editCuisineTypeBtn.addEventListener('click', openEditCuisineModal);
    deleteCuisineTypeBtn.addEventListener('click', confirmDeleteCuisine);
    
    saveNewCuisineBtn.addEventListener('click', saveNewCuisine);
    cancelNewCuisineBtn.addEventListener('click', () => closeModalById('add-cuisine-modal'));
    
    saveEditCuisineBtn.addEventListener('click', saveEditCuisine);
    cancelEditCuisineBtn.addEventListener('click', () => closeModalById('edit-cuisine-modal'));
    
    // 其他现有监听器
    addTakeawayBtn.addEventListener('click', addCustomTakeaway);
    addCuisineFoodBtn.addEventListener('click', addCustomCuisineFood);
    saveTakeawaySelectionsBtn.addEventListener('click', saveTakeawaySelections);
    saveCuisineSelectionsBtn.addEventListener('click', saveCuisineSelections);
    
    resetDefaultsBtn.addEventListener('click', function() {
        confirmAction = 'reset';
        showConfirmModal("确定要恢复默认设置吗？外卖、菜系和随机选择列表将恢复到默认状态，所有修改记录也将被清空。");
    });
    
    confirmYesBtn.addEventListener('click', handleConfirmAction);
    confirmNoBtn.addEventListener('click', closeConfirmModal);
    
    // 窗口点击事件，只允许确认模态框通过点击外部关闭
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            // 只有确认模态框允许点击外部关闭
            if (e.target.id === 'confirm-modal') {
                closeConfirmModal();
            }
        }
    });

    // 为菜系选择器添加变更事件
    cuisineSelect.addEventListener('change', updateCuisineFoodSelections);
}

// 页面导航
function navigateTo(pageId) {
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
    
    // 更新URL hash，但不触发hashchange事件
    if (window.location.hash !== '#' + pageId) {
        history.replaceState(null, null, '#' + pageId);
    }
}

// 检查URL hash并导航到相应页面
function checkUrlAndNavigate() {
    const hash = window.location.hash.substring(1); // 去掉#号
    if (hash) {
        // 检查hash是否对应有效页面
        const validPages = ['home', 'takeaway', 'cuisines', 'history', 'reset', 'donate'];
        if (validPages.includes(hash)) {
            navigateTo(hash);
        }
    }
}

// 从已选美食中随机选择
function startRandomSelection() {
    if (appData.randomSelections.length === 0) {
        foodDisplay.textContent = "没有已选美食";
        return;
    }
    
    let count = 0;
    const maxCount = 20; // 随机滚动次数
    const interval = 100; // 滚动间隔时间
    
    const randomRoll = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * appData.randomSelections.length);
        foodDisplay.textContent = appData.randomSelections[randomIndex];
        
        count++;
        if (count >= maxCount) {
            clearInterval(randomRoll);
            // 随机选择不记录到历史记录中
        }
    }, interval);
}

// 从所有美食中随机选择
function startRandomAllSelection() {
    // 收集所有美食：外卖和所有菜系的菜品
    const allFoods = [...appData.takeaway];
    
    // 添加所有菜系菜品
    for (const cuisine in appData.cuisines) {
        allFoods.push(...appData.cuisines[cuisine]);
    }
    
    // 去重
    const uniqueFoods = [...new Set(allFoods)];
    
    if (uniqueFoods.length === 0) {
        foodDisplay.textContent = "没有美食可选择";
        return;
    }
    
    let count = 0;
    const maxCount = 20; // 随机滚动次数
    const interval = 100; // 滚动间隔时间
    
    const randomRoll = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * uniqueFoods.length);
        foodDisplay.textContent = uniqueFoods[randomIndex];
        
        count++;
        if (count >= maxCount) {
            clearInterval(randomRoll);
            // 随机选择不记录到历史记录中
        }
    }, interval);
}

// 打开编辑模态框
function openEditModal() {
    const modal = document.getElementById('edit-modal');
    
    // 渲染内容
    renderEditModal();
    
    // 显示模态框
    modal.classList.add('active');
}

// 打开编辑外卖模态框
function openEditTakeawayModal() {
    const modal = document.getElementById('edit-takeaway-modal');
    
    // 渲染内容
    renderTakeawaySelections();
    
    // 显示模态框
    modal.classList.add('active');
}

// 打开编辑菜肴模态框
function openEditCuisinesModal() {
    const modal = document.getElementById('edit-cuisines-modal');
    
    // 渲染内容
    renderCuisineSelect();
    updateCuisineFoodSelections(); // 初始加载第一个菜系的菜品
    
    // 显示模态框
    modal.classList.add('active');
}

// 关闭指定ID的模态框
function closeModalById(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        // 移除active类来隐藏模态框
        modal.classList.remove('active');
        
        // 如果是编辑美食选项模态框，清空搜索和恢复默认视图
        if (modalId === 'edit-modal') {
            const searchInput = document.getElementById('food-search');
            if (searchInput) searchInput.value = '';
            hideSearchResults();
            
            // 恢复默认视图
            const takeawayBtn = document.getElementById('select-takeaway');
            if (takeawayBtn) takeawayBtn.click();
        }
    }
}

// 关闭确认模态框
function closeConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    modal.classList.remove('active');
}

// 显示确认模态框
function showConfirmModal(message) {
    const modal = document.getElementById('confirm-modal');
    confirmMessage.textContent = message;
    modal.classList.add('active');
}

// 处理确认操作
function handleConfirmAction() {
    switch (confirmAction) {
        case 'reset':
            resetToDefaults();
            break;
        case 'clearRandomSelections':
            clearRandomSelections();
            break;
        case 'deleteCuisine':
            deleteCuisine();
            break;
    }
    closeConfirmModal();
}

// 切换标签页
function switchTab(tabId) {
    tabBtns.forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        if (content.id === tabId) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

// 添加自定义食物
function addCustomFood() {
    const foodName = newFoodInput.value.trim();
    if (foodName && !appData.randomSelections.includes(foodName)) {
        appData.randomSelections.push(foodName);
        addHistory(`添加了 ${foodName} 到已选美食列表`);
        saveData();
        newFoodInput.value = '';
        renderFoodSelections();
        showAutoSaveSuccess();
    }
}

// 添加自定义外卖
function addCustomTakeaway() {
    const takeawayName = newTakeawayInput.value.trim();
    if (takeawayName && !appData.takeaway.includes(takeawayName)) {
        // 添加到临时数组而不是直接保存
        const tempTakeaway = document.createElement('li');
        tempTakeaway.className = 'selection-item new-item';
        
        const foodSpan = document.createElement('span');
        foodSpan.textContent = takeawayName;
        
        const removeBtn = document.createElement('span');
        removeBtn.className = 'remove-selection';
        removeBtn.innerHTML = '&times;';
        removeBtn.addEventListener('click', () => {
            tempTakeaway.remove();
            showMessage("已移除未保存的外卖项");
        });
        
        tempTakeaway.appendChild(foodSpan);
        tempTakeaway.appendChild(removeBtn);
        takeawaySelectionsList.appendChild(tempTakeaway);
        
        newTakeawayInput.value = '';
        showMessage("已添加到列表，点击保存按钮生效");
    }
}

// 添加自定义菜肴
function addCustomCuisineFood() {
    const cuisineType = cuisineSelect.value;
    const foodName = newCuisineFoodInput.value.trim();
    
    if (cuisineType && foodName && !appData.cuisines[cuisineType].includes(foodName)) {
        // 添加到临时UI而不是直接保存
        const tempFood = document.createElement('li');
        tempFood.className = 'selection-item new-item';
        
        const foodSpan = document.createElement('span');
        foodSpan.textContent = foodName;
        
        const removeBtn = document.createElement('span');
        removeBtn.className = 'remove-selection';
        removeBtn.innerHTML = '&times;';
        removeBtn.addEventListener('click', () => {
            tempFood.remove();
            showMessage("已移除未保存的菜肴项");
        });
        
        tempFood.appendChild(foodSpan);
        tempFood.appendChild(removeBtn);
        cuisineFoodSelectionsList.appendChild(tempFood);
        
        newCuisineFoodInput.value = '';
        showMessage("已添加到列表，点击保存按钮生效");
    }
}

// 保存外卖选择
function saveTakeawaySelections() {
    // 获取原始列表的副本
    const originalTakeaway = [...appData.takeaway];
    
    // 获取外卖选择列表
    const takeawaySelectionsList = document.getElementById('takeaway-selections');
    if (!takeawaySelectionsList) {
        showMessage("错误：找不到外卖选择列表");
        return;
    }
    
    // 从UI收集最新数据
    const selectedItems = takeawaySelectionsList.querySelectorAll('.selection-item:not(.marked-for-deletion)');
    const newTakeawayList = [];
    let hasChanges = false;
    
    selectedItems.forEach(item => {
        const foodName = item.querySelector('span:not(.remove-selection)').textContent;
        if (foodName && !newTakeawayList.includes(foodName)) {
            newTakeawayList.push(foodName);
            
            // 检查是否是新添加的项目
            if (item.classList.contains('new-item') && !originalTakeaway.includes(foodName)) {
                addHistory(`添加了外卖 ${foodName}`);
                hasChanges = true;
            }
        }
    });
    
    // 检查是否有项目被删除
    originalTakeaway.forEach(item => {
        if (!newTakeawayList.includes(item)) {
            addHistory(`删除了外卖 ${item}`);
            hasChanges = true;
        }
    });
    
    // 更新数据
    appData.takeaway = newTakeawayList;
    saveData();
    
    // 重新渲染外卖页面
    renderTakeawayPage();
    
    // 关闭模态框
    closeModalById('edit-takeaway-modal');
    
    // 显示成功消息
    if (hasChanges || JSON.stringify(originalTakeaway) !== JSON.stringify(newTakeawayList)) {
        showMessage("外卖选项已保存");
        showContentModified();
    }
}

// 保存菜肴选择
function saveCuisineSelections() {
    const cuisineSelect = document.getElementById('cuisine-select');
    if (!cuisineSelect) {
        showMessage("错误：找不到菜系选择器");
        return;
    }
    
    const selectedCuisine = cuisineSelect.value;
    if (!selectedCuisine) {
        showMessage("请先选择一个菜系");
        return;
    }
    
    // 获取菜系食物列表
    const cuisineFoodSelectionsList = document.getElementById('cuisine-food-selections');
    if (!cuisineFoodSelectionsList) {
        showMessage("错误：找不到菜系食物列表");
        return;
    }
    
    // 获取原始列表的副本
    const originalCuisineFoods = [...appData.cuisines[selectedCuisine]];
    
    // 从UI收集最新数据
    const selectedItems = cuisineFoodSelectionsList.querySelectorAll('.selection-item:not(.marked-for-deletion)');
    const newCuisineFoodsList = [];
    let hasChanges = false;
    
    selectedItems.forEach(item => {
        const foodName = item.querySelector('span:not(.remove-selection)').textContent;
        if (foodName && !newCuisineFoodsList.includes(foodName)) {
            newCuisineFoodsList.push(foodName);
            
            // 检查是否是新添加的项目
            if (item.classList.contains('new-item') && !originalCuisineFoods.includes(foodName)) {
                addHistory(`添加了${selectedCuisine}菜肴 ${foodName}`);
                hasChanges = true;
            }
        }
    });
    
    // 检查是否有项目被删除
    originalCuisineFoods.forEach(item => {
        if (!newCuisineFoodsList.includes(item)) {
            addHistory(`删除了${selectedCuisine}菜肴 ${item}`);
            hasChanges = true;
        }
    });
    
    // 更新数据
    appData.cuisines[selectedCuisine] = newCuisineFoodsList;
    saveData();
    
    // 重新渲染菜肴页面
    renderCuisinesPage();
    
    // 关闭模态框
    closeModalById('edit-cuisines-modal');
    
    // 显示成功消息
    if (hasChanges || JSON.stringify(originalCuisineFoods) !== JSON.stringify(newCuisineFoodsList)) {
        showMessage(`${selectedCuisine}菜肴选项已保存`);
        showContentModified();
    }
}

// 重置为默认设置
function resetToDefaults() {
    // 保存当前页面ID
    const currentPageId = document.querySelector('.page.active').id;
    
    // 重置数据到默认状态，完全包括历史记录
    appData = JSON.parse(JSON.stringify(defaultData));
    
    // 添加新的历史记录，作为第一条记录
    addHistory("恢复了默认设置");
    
    // 保存数据
    saveData();
    
    // 重新渲染页面
    renderTakeawayPage();
    renderCuisinesPage();
    renderHistoryPage();
    
    // 保持在当前页面
    navigateTo(currentPageId);
    
    // 关闭确认模态框
    closeConfirmModal();
    
    // 显示成功消息
    showMessage("已恢复默认设置，修改记录已清空");
    
    // 自动刷新页面，确保数据及时更新
    setTimeout(() => {
        window.location.reload();
    }, 1500);
}

// 添加历史记录
function addHistory(action) {
    // 判断操作来源，只记录外卖和菜系相关的操作
    const isTakeawayOrCuisineChange = 
        action.includes('外卖') || 
        action.includes('菜系') || 
        action.includes('菜肴');
    
    // 如果不是外卖或菜系相关的操作，不记录历史
    if (!isTakeawayOrCuisineChange) {
        return;
    }
    
    const now = new Date();
    const date = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    let foodName = '';
    let isAdd = false;
    let isDelete = false;
    
    // 解析操作类型和食物名称
    if (action.includes('添加了') && action.includes('外卖')) {
        foodName = action.split('添加了外卖 ')[1];
        isAdd = true;
    } else if (action.includes('删除了外卖')) {
        foodName = action.split('删除了外卖 ')[1];
        isDelete = true;
    } else if (action.includes('添加了') && action.includes('菜肴')) {
        const parts = action.split('添加了')[1].split('菜肴 ');
        foodName = parts[1];
        isAdd = true;
    } else if (action.includes('删除了') && action.includes('菜肴')) {
        const parts = action.split('删除了')[1].split('菜肴 ');
        foodName = parts[1];
        isDelete = true;
    }
    
    appData.history.unshift({
        date,
        action,
        foodName,
        isAdd,
        isDelete
    });
    
    // 限制历史记录数量
    if (appData.history.length > 50) {
        appData.history = appData.history.slice(0, 50);
    }
    
    saveData();
    renderHistoryPage();
}

// 保存数据到本地存储
function saveData() {
    localStorage.setItem('eatTodayApp', JSON.stringify(appData));
}

// 渲染常见外卖页面
function renderTakeawayPage() {
    const foodList = document.querySelector('#takeaway .food-list');
    foodList.innerHTML = '';
    
    appData.takeaway.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        foodItem.textContent = food;
        foodItem.addEventListener('click', () => {
            if (!appData.randomSelections.includes(food)) {
                appData.randomSelections.push(food);
                // 不再记录到修改历史
                saveData();
            }
        });
        foodList.appendChild(foodItem);
    });
}

// 渲染各系菜肴页面
function renderCuisinesPage() {
    const categoriesContainer = document.querySelector('#cuisines .cuisine-categories');
    const foodsContainer = document.querySelector('#cuisines .cuisine-foods');
    
    if (!categoriesContainer || !foodsContainer) {
        console.error("找不到菜系页面容器元素");
        return;
    }
    
    categoriesContainer.innerHTML = '';
    
    // 创建菜系类别
    Object.keys(appData.cuisines).forEach((cuisine, index) => {
        const cuisineItem = document.createElement('div');
        cuisineItem.className = 'cuisine-item';
        if (index === 0) cuisineItem.classList.add('active');
        cuisineItem.textContent = cuisine;
        cuisineItem.setAttribute('data-cuisine', cuisine);
        
        // 添加是否为系统默认菜系的标记
        if (appData.defaultCuisines.includes(cuisine)) {
            cuisineItem.classList.add('default-cuisine');
            cuisineItem.title = "系统默认菜系";
        } else {
            cuisineItem.classList.add('user-cuisine');
            cuisineItem.title = "用户添加的菜系";
        }
        
        cuisineItem.addEventListener('click', function() {
            // 移除所有菜系的active类
            categoriesContainer.querySelectorAll('.cuisine-item').forEach(item => {
                item.classList.remove('active');
            });
            // 添加当前菜系的active类
            this.classList.add('active');
            // 渲染该菜系的菜品
            renderCuisineFoods(cuisine);
        });
        
        categoriesContainer.appendChild(cuisineItem);
    });
    
    // 默认显示第一个菜系的菜品
    const firstCuisine = Object.keys(appData.cuisines)[0];
    if (firstCuisine) {
        renderCuisineFoods(firstCuisine);
    }
}

// 渲染特定菜系的菜品
function renderCuisineFoods(cuisine) {
    if (!cuisine) return;
    
    // 检查调用环境：在主页面的菜系展示或编辑模态框内
    let foodsContainer;
    const modalContainer = document.querySelector('#cuisines-container .cuisine-foods');
    const pageContainer = document.querySelector('#cuisines .cuisine-foods');
    
    if (modalContainer && modalContainer.offsetParent !== null) {
        // 编辑模态框内调用
        foodsContainer = modalContainer;
    } else if (pageContainer && pageContainer.offsetParent !== null) {
        // 菜系页面内调用
        foodsContainer = pageContainer;
    } else {
        console.error("找不到合适的食物容器");
        return;
    }
    
    if (!foodsContainer) return;
    
    foodsContainer.innerHTML = '';
    
    if (!appData.cuisines[cuisine] || appData.cuisines[cuisine].length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-selection-message';
        emptyMessage.textContent = '该菜系暂无菜肴，请前往"编辑菜肴选项"添加';
        foodsContainer.appendChild(emptyMessage);
        return;
    }
    
    appData.cuisines[cuisine].forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        foodItem.textContent = food;
        foodItem.setAttribute('data-food', food.toLowerCase());
        foodItem.setAttribute('data-cuisine', cuisine);
        
        foodItem.addEventListener('click', () => {
            if (!appData.randomSelections.includes(food)) {
                appData.randomSelections.push(food);
                // 不记录到修改历史
                saveData();
                renderFoodSelections();
                showContentModified();
            }
        });
        
        foodsContainer.appendChild(foodItem);
    });
}

// 渲染历史记录页面
function renderHistoryPage() {
    const addedFoodsList = document.querySelector('.added-foods-list');
    const deletedFoodsList = document.querySelector('.deleted-foods-list');
    
    // 清空列表
    addedFoodsList.innerHTML = '';
    deletedFoodsList.innerHTML = '';
    
    // 用于跟踪已添加的食物，避免重复
    const addedFoods = new Set();
    const deletedFoods = new Set();
    
    // 如果没有历史记录
    if (appData.history.length === 0) {
        addedFoodsList.innerHTML = '<div class="empty-selection-message">暂无添加记录</div>';
        deletedFoodsList.innerHTML = '<div class="empty-selection-message">暂无删除记录</div>';
        return;
    }
    
    // 遍历历史记录，提取添加和删除的食物
    appData.history.forEach(item => {
        if (item.isAdd && item.foodName && !addedFoods.has(item.foodName)) {
            addedFoods.add(item.foodName);
            
            const foodItem = document.createElement('div');
            foodItem.className = 'food-item';
            foodItem.textContent = item.foodName;
            
            // 添加一个时间提示
            foodItem.setAttribute('title', `添加时间: ${item.date}`);
            
            addedFoodsList.appendChild(foodItem);
        }
        else if (item.isDelete && item.foodName && !deletedFoods.has(item.foodName)) {
            deletedFoods.add(item.foodName);
            
            const foodItem = document.createElement('div');
            foodItem.className = 'food-item';
            foodItem.textContent = item.foodName;
            
            // 添加一个时间提示
            foodItem.setAttribute('title', `删除时间: ${item.date}`);
            
            deletedFoodsList.appendChild(foodItem);
        }
    });
    
    // 如果没有添加记录
    if (addedFoods.size === 0) {
        addedFoodsList.innerHTML = '<div class="empty-selection-message">暂无添加记录</div>';
    }
    
    // 如果没有删除记录
    if (deletedFoods.size === 0) {
        deletedFoodsList.innerHTML = '<div class="empty-selection-message">暂无删除记录</div>';
    }
}

// 渲染编辑模态框
function renderEditModal() {
    const modal = document.getElementById('edit-modal');
    modal.classList.add('active');
    
    const modalContent = document.querySelector('#edit-modal .modal-content');
    modalContent.innerHTML = `
        <h2>修改美食选项</h2>
        <span class="close-modal" data-modal="edit-modal">&times;</span>
        
        <!-- 当前选择部分 -->
        <div class="current-selections clean-border">
            <h3>已选美食</h3>
            <ul id="food-selections">
                <!-- 当前选择的食物将由JavaScript动态生成 -->
            </ul>
        </div>
        
        <!-- 从列表中选择部分 -->
        <div class="edit-section selection-section">
            <h3>从列表中选择</h3>
            
            <!-- 搜索框 -->
            <div class="search-container">
                <input type="text" id="food-search" class="search-input" placeholder="搜索美食...">
            </div>
            
            <!-- 外卖/菜肴选择按钮 -->
            <div class="select-type-container">
                <button id="select-takeaway" class="select-type-btn active">外卖</button>
                <button id="select-cuisines" class="select-type-btn">菜肴</button>
            </div>
            
            <!-- 外卖列表容器 -->
            <div id="takeaway-container" class="food-container active">
                <div class="food-list-container">
                    <!-- 外卖选项将由JavaScript动态生成 -->
                </div>
            </div>
            
            <!-- 菜肴列表容器 -->
            <div id="cuisines-container" class="food-container">
                <!-- 菜系分类 -->
                <div class="cuisine-categories">
                    <!-- 菜系类别将由JavaScript动态生成 -->
                </div>
                <!-- 菜系对应的菜肴 -->
                <div class="cuisine-foods">
                    <!-- 选定菜系的食物将由JavaScript动态生成 -->
                </div>
            </div>
        </div>
    `;
    
    // 添加关闭按钮事件
    const closeBtn = document.querySelector('#edit-modal .close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeModalById('edit-modal');
        });
    }
    
    // 初始化分类选择器和食物列表
    initFoodTypeSelectors();
    renderTakeawayList();
    renderCuisineCategories();
    
    // 渲染已选食物
    renderFoodSelections();
    
    // 添加搜索功能
    document.getElementById('food-search').addEventListener('input', function() {
        const searchTerm = this.value;
        // 搜索全部美食
        searchAllFoods(searchTerm);
    });
}

// 渲染外卖列表
function renderTakeawayList() {
    const container = document.querySelector('#takeaway-container .food-list-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (appData.takeaway.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-selection-message';
        emptyMessage.textContent = '暂无外卖选项，请前往"编辑外卖选项"添加';
        container.appendChild(emptyMessage);
        return;
    }
    
    appData.takeaway.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        foodItem.textContent = food;
        foodItem.setAttribute('data-food', food.toLowerCase());
        
        foodItem.addEventListener('click', () => {
            if (!appData.randomSelections.includes(food)) {
                appData.randomSelections.push(food);
                // 不记录到修改历史
                saveData();
                renderFoodSelections();
                showContentModified();
            }
        });
        
        container.appendChild(foodItem);
    });
}

// 渲染菜系分类
function renderCuisineCategories() {
    const container = document.querySelector('#cuisines-container .cuisine-categories');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (Object.keys(appData.cuisines).length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-selection-message';
        emptyMessage.textContent = '暂无菜系，请前往"编辑菜肴选项"添加';
        container.appendChild(emptyMessage);
        return;
    }
    
    Object.keys(appData.cuisines).forEach((cuisine, index) => {
        const cuisineItem = document.createElement('div');
        cuisineItem.className = 'cuisine-item';
        cuisineItem.textContent = cuisine;
        cuisineItem.setAttribute('data-cuisine', cuisine);
        
        // 添加是否为系统默认菜系的标记
        if (appData.defaultCuisines.includes(cuisine)) {
            cuisineItem.classList.add('default-cuisine');
            cuisineItem.title = "系统默认菜系";
        } else {
            cuisineItem.classList.add('user-cuisine');
            cuisineItem.title = "用户添加的菜系";
        }
        
        cuisineItem.addEventListener('click', () => {
            // 移除其他菜系的active类
            container.querySelectorAll('.cuisine-item').forEach(item => {
                item.classList.remove('active');
            });
            // 添加当前菜系的active类
            cuisineItem.classList.add('active');
            
            // 渲染该菜系的食物
            renderCuisineFoods(cuisine);
        });
        
        container.appendChild(cuisineItem);
    });
    
    // 默认选中第一个菜系
    const firstCuisine = container.querySelector('.cuisine-item');
    if (firstCuisine) {
        firstCuisine.click();
    }
}

// 渲染初始菜系食物
function renderInitialCuisineFoods(container) {
    const firstCuisine = Object.keys(appData.cuisines)[0];
    renderCuisineFoodsList(container, firstCuisine);
}

// 渲染特定菜系的食物列表
function renderCuisineFoodsList(container, cuisine) {
    container.innerHTML = '';
    
    const foodList = document.createElement('div');
    foodList.className = 'food-list';
    
    appData.cuisines[cuisine].forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        foodItem.textContent = food;
        foodItem.setAttribute('data-food', food.toLowerCase());
        foodItem.setAttribute('data-cuisine', cuisine);
        
        foodItem.addEventListener('click', () => {
            if (!appData.randomSelections.includes(food)) {
                appData.randomSelections.push(food);
                // 不记录到修改历史
                saveData();
                renderFoodSelections();
                showContentModified();
            }
        });
        
        foodList.appendChild(foodItem);
    });
    
    container.appendChild(foodList);
}

// 渲染已选食物列表
function renderFoodSelections() {
    const container = document.getElementById('food-selections');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (!appData.randomSelections || appData.randomSelections.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.className = 'empty-selection-message';
        emptyMessage.textContent = '暂无已选美食，请从列表选择或随机生成';
        container.appendChild(emptyMessage);
        return;
    }
    
    appData.randomSelections.forEach(food => {
        const selectionItem = document.createElement('li');
        selectionItem.className = 'selection-item';
        
        const foodName = document.createElement('span');
        foodName.className = 'food-name';
        foodName.textContent = food;
        
        const removeBtn = document.createElement('span');
        removeBtn.className = 'remove-selection';
        removeBtn.innerHTML = '&times;';
        removeBtn.title = '移除此项';
        
        removeBtn.addEventListener('click', () => {
            const index = appData.randomSelections.indexOf(food);
            if (index > -1) {
                appData.randomSelections.splice(index, 1);
                // 不记录到修改历史
                saveData();
                renderFoodSelections();
            }
        });
        
        selectionItem.appendChild(foodName);
        selectionItem.appendChild(removeBtn);
        container.appendChild(selectionItem);
    });
    
    // 添加清空按钮（如果有超过1个选项）
    if (appData.randomSelections.length > 1) {
        const clearAllContainer = document.createElement('li');
        clearAllContainer.className = 'clear-all-container';
        
        const clearAllBtn = document.createElement('button');
        clearAllBtn.className = 'btn warning clear-all-btn';
        clearAllBtn.textContent = '清空全部';
        clearAllBtn.addEventListener('click', () => {
            clearRandomSelections();
        });
        
        clearAllContainer.appendChild(clearAllBtn);
        container.appendChild(clearAllContainer);
    }
}

// 渲染外卖选择
function renderTakeawaySelections() {
    const takeawaySelectionsList = document.getElementById('takeaway-selections');
    if (!takeawaySelectionsList) {
        console.error("无法找到外卖选择列表元素");
        return;
    }
    
    takeawaySelectionsList.innerHTML = '';
    
    appData.takeaway.forEach(food => {
        const li = document.createElement('li');
        li.className = 'selection-item';
        li.setAttribute('data-food', food);
        
        const foodSpan = document.createElement('span');
        foodSpan.textContent = food;
        
        const removeBtn = document.createElement('span');
        removeBtn.className = 'remove-selection';
        removeBtn.innerHTML = '&times;';
        removeBtn.addEventListener('click', () => {
            // 标记为删除而不是实际删除
            li.classList.add('marked-for-deletion');
            foodSpan.style.textDecoration = 'line-through';
            showMessage("已标记删除，点击保存按钮生效");
        });
        
        li.appendChild(foodSpan);
        li.appendChild(removeBtn);
        takeawaySelectionsList.appendChild(li);
    });
}

// 渲染菜系选择器
function renderCuisineSelect() {
    const cuisineSelect = document.getElementById('cuisine-select');
    if (!cuisineSelect) return;
    
    cuisineSelect.innerHTML = '';
    
    // 先添加默认菜系
    appData.defaultCuisines.forEach(cuisine => {
        if (appData.cuisines[cuisine]) {
            const option = document.createElement('option');
            option.value = cuisine;
            option.textContent = cuisine;
            option.className = "default-cuisine";
            cuisineSelect.appendChild(option);
        }
    });
    
    // 再添加用户自定义菜系
    Object.keys(appData.cuisines).forEach(cuisine => {
        if (!appData.defaultCuisines.includes(cuisine)) {
            const option = document.createElement('option');
            option.value = cuisine;
            option.textContent = cuisine;
            option.className = "user-cuisine";
            cuisineSelect.appendChild(option);
        }
    });
    
    // 当菜系选择改变时，重新渲染菜系食物
    cuisineSelect.addEventListener('change', function() {
        renderCuisineFoods(this.value);
    });
}

// 更新当前选择菜系的菜肴
function updateCuisineFoodSelections() {
    const cuisineSelect = document.getElementById('cuisine-select');
    if (!cuisineSelect) {
        console.error("无法找到菜系选择器元素");
        return;
    }
    
    const cuisineFoodSelectionsList = document.getElementById('cuisine-food-selections');
    if (!cuisineFoodSelectionsList) {
        console.error("无法找到菜系食物列表元素");
        return;
    }
    
    const selectedCuisine = cuisineSelect.value;
    cuisineFoodSelectionsList.innerHTML = '';
    
    if (!selectedCuisine || !appData.cuisines[selectedCuisine]) return;
    
    appData.cuisines[selectedCuisine].forEach(food => {
        const li = document.createElement('li');
        li.className = 'selection-item';
        li.setAttribute('data-food', food);
        
        const foodSpan = document.createElement('span');
        foodSpan.textContent = food;
        
        const removeBtn = document.createElement('span');
        removeBtn.className = 'remove-selection';
        removeBtn.innerHTML = '&times;';
        removeBtn.addEventListener('click', () => {
            // 标记为删除而不是实际删除
            li.classList.add('marked-for-deletion');
            foodSpan.style.textDecoration = 'line-through';
            showMessage("已标记删除，点击保存按钮生效");
        });
        
        li.appendChild(foodSpan);
        li.appendChild(removeBtn);
        cuisineFoodSelectionsList.appendChild(li);
    });
}

// 清空随机选择
function clearRandomSelections() {
    // 清空选择
    appData.randomSelections = [];
    saveData();
    renderFoodSelections();
    
    // 显示通知
    showMessage("已清空所有选择");
}

// 自动保存已选美食
function autoSaveSelections() {
    // 获取原始列表的副本
    const originalSelections = [...appData.randomSelections];
    
    // 从界面收集最新的随机选择列表
    const selectedItems = document.querySelectorAll('#food-selections .selection-item');
    const newSelections = [];
    
    selectedItems.forEach(item => {
        const foodName = item.querySelector('.food-name').textContent;
        if (foodName && !newSelections.includes(foodName)) {
            newSelections.push(foodName);
        }
    });
    
    // 更新数据
    appData.randomSelections = newSelections;
    saveData();
    
    // 只有当列表发生变化时才记录历史
    if (JSON.stringify(originalSelections) !== JSON.stringify(appData.randomSelections)) {
        // 记录修改历史
        addHistory("修改了已选美食列表");
        
        // 显示修改提示
        showContentModified();
    }
}

// 显示临时消息
function showMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.classList.add('fade-out');
        setTimeout(() => {
            messageDiv.remove();
        }, 500);
    }, 2000);
}

// 显示内容修改提示
function showContentModified() {
    // 检查是否已存在提示元素
    let modifiedElement = document.querySelector('.content-modified');
    
    if (!modifiedElement) {
        modifiedElement = document.createElement('div');
        modifiedElement.className = 'content-modified';
        modifiedElement.textContent = '内容已更新';
        document.body.appendChild(modifiedElement);
    }
    
    // 显示提示
    modifiedElement.classList.add('show');
    
    // 0.5秒后隐藏
    setTimeout(() => {
        modifiedElement.classList.remove('show');
    }, 500);
}

// 显示自动保存成功提示
function showAutoSaveSuccess() {
    // 检查是否已存在提示元素
    let saveSuccessElement = document.querySelector('.auto-save-success');
    
    if (!saveSuccessElement) {
        saveSuccessElement = document.createElement('div');
        saveSuccessElement.className = 'auto-save-success';
        saveSuccessElement.textContent = '自动保存成功';
        document.body.appendChild(saveSuccessElement);
    }
    
    // 显示提示
    saveSuccessElement.classList.add('show');
    
    // 0.5秒后隐藏
    setTimeout(() => {
        saveSuccessElement.classList.remove('show');
    }, 500);
    
    // 同时显示内容修改提示
    showContentModified();
}

// 打开新增菜系模态框
function openAddCuisineModal() {
    const modal = document.getElementById('add-cuisine-modal');
    
    // 清空输入
    newCuisineNameInput.value = '';
    
    // 显示模态框
    modal.classList.add('active');
}

// 打开编辑菜系模态框
function openEditCuisineModal() {
    const currentCuisine = cuisineSelect.value;
    if (!currentCuisine) {
        showMessage("请先选择一个菜系");
        return;
    }
    
    // 检查是否为系统默认菜系
    if (appData.defaultCuisines.includes(currentCuisine)) {
        showMessage("系统默认菜系不能修改");
        return;
    }
    
    const modal = document.getElementById('edit-cuisine-modal');
    
    // 准备内容
    oldCuisineName = currentCuisine;
    editCuisineNameInput.value = currentCuisine;
    
    // 显示模态框
    modal.classList.add('active');
}

// 确认删除菜系
function confirmDeleteCuisine() {
    const currentCuisine = cuisineSelect.value;
    if (!currentCuisine) {
        showMessage("请先选择一个菜系");
        return;
    }
    
    // 检查是否为系统默认菜系
    if (appData.defaultCuisines.includes(currentCuisine)) {
        showMessage("系统默认菜系不能删除");
        return;
    }
    
    // 如果只剩一个菜系，不允许删除
    if (Object.keys(appData.cuisines).length <= 1) {
        showMessage("至少需要保留一个菜系");
        return;
    }
    
    currentCuisineToDelete = currentCuisine;
    confirmAction = 'deleteCuisine';
    showConfirmModal(`确定要删除"${currentCuisine}"菜系吗？该菜系下的所有菜肴都将被删除。`);
}

// 保存新菜系
function saveNewCuisine() {
    const newCuisineName = newCuisineNameInput.value.trim();
    
    if (!newCuisineName) {
        showMessage("菜系名称不能为空");
        return;
    }
    
    // 检查是否已存在
    if (appData.cuisines[newCuisineName]) {
        showMessage("该菜系已存在");
        return;
    }
    
    // 添加新菜系
    appData.cuisines[newCuisineName] = [];
    
    // 记录历史
    addHistory(`添加了新菜系 ${newCuisineName}`);
    
    // 保存数据
    saveData();
    
    // 更新界面
    renderCuisineSelect();
    renderCuisinesPage();
    
    // 设置为当前选中
    cuisineSelect.value = newCuisineName;
    updateCuisineFoodSelections();
    
    // 关闭模态框
    closeModalById('add-cuisine-modal');
    
    // 显示成功消息
    showMessage(`新菜系"${newCuisineName}"添加成功`);
    showContentModified();
}

// 保存编辑后的菜系
function saveEditCuisine() {
    newCuisineName = editCuisineNameInput.value.trim();
    
    if (!newCuisineName) {
        showMessage("菜系名称不能为空");
        return;
    }
    
    // 如果名称没变，直接关闭
    if (newCuisineName === oldCuisineName) {
        closeModalById('edit-cuisine-modal');
        return;
    }
    
    // 检查是否已存在
    if (appData.cuisines[newCuisineName]) {
        showMessage("该菜系已存在");
        return;
    }
    
    // 更新菜系名称
    appData.cuisines[newCuisineName] = [...appData.cuisines[oldCuisineName]];
    delete appData.cuisines[oldCuisineName];
    
    // 记录历史
    addHistory(`将菜系"${oldCuisineName}"重命名为"${newCuisineName}"`);
    
    // 保存数据
    saveData();
    
    // 更新界面
    renderCuisineSelect();
    renderCuisinesPage();
    
    // 设置为当前选中
    cuisineSelect.value = newCuisineName;
    updateCuisineFoodSelections();
    
    // 关闭模态框
    closeModalById('edit-cuisine-modal');
    
    // 显示成功消息
    showMessage(`菜系重命名成功`);
    showContentModified();
}

// 删除当前菜系
function deleteCuisine() {
    if (!currentCuisineToDelete || !appData.cuisines[currentCuisineToDelete]) {
        showMessage("删除失败，菜系不存在");
        return;
    }
    
    // 记录删除的菜品
    const deletedFoods = [...appData.cuisines[currentCuisineToDelete]];
    
    // 删除菜系
    delete appData.cuisines[currentCuisineToDelete];
    
    // 记录历史
    addHistory(`删除了菜系 ${currentCuisineToDelete}`);
    
    // 对于每个被删除的菜品，也添加一条历史记录
    deletedFoods.forEach(food => {
        addHistory(`删除了${currentCuisineToDelete}菜肴 ${food}`);
    });
    
    // 保存数据
    saveData();
    
    // 更新界面
    renderCuisineSelect();
    renderCuisinesPage();
    updateCuisineFoodSelections();
    
    // 显示成功消息
    showMessage(`菜系"${currentCuisineToDelete}"已删除`);
    showContentModified();
    
    // 重置
    currentCuisineToDelete = '';
}

// 搜索全部美食
function searchAllFoods(searchTerm) {
    const searchTermLower = searchTerm.toLowerCase();
    let hasResults = false;
    
    if (!searchTerm) {
        // 如果搜索词为空，恢复正常显示
        switchFoodType(document.querySelector('#takeaway-container').classList.contains('active') ? 'takeaway' : 'cuisine');
        hideSearchResults();
        return;
    }

    // 先隐藏所有食物项
    const allFoodItems = document.querySelectorAll('.food-container .food-item');
    allFoodItems.forEach(item => {
        item.classList.add('hidden');
    });

    // 隐藏所有菜系
    const cuisineItems = document.querySelectorAll('.cuisine-categories .cuisine-item');
    cuisineItems.forEach(item => {
        item.classList.add('hidden');
    });

    // 显示与搜索词匹配的外卖食物
    const takeawayItems = document.querySelectorAll('#takeaway-container .food-item');
    takeawayItems.forEach(item => {
        const foodName = item.textContent.toLowerCase();
        if (foodName.includes(searchTermLower)) {
            item.classList.remove('hidden');
            hasResults = true;
            
            // 确保外卖容器可见
            document.getElementById('takeaway-container').classList.add('active');
            document.getElementById('select-takeaway').classList.add('active');
        }
    });

    // 显示与搜索词匹配的菜系食物
    const cuisineFoodItems = document.querySelectorAll('#cuisines-container .cuisine-foods .food-item');
    cuisineFoodItems.forEach(item => {
        const foodName = item.textContent.toLowerCase();
        if (foodName.includes(searchTermLower)) {
            item.classList.remove('hidden');
            hasResults = true;
            
            // 显示该食物所属的菜系
            const cuisine = item.getAttribute('data-cuisine');
            const cuisineItem = document.querySelector(`.cuisine-item[data-cuisine="${cuisine}"]`);
            if (cuisineItem) {
                cuisineItem.classList.remove('hidden');
            }
            
            // 确保菜系容器可见
            document.getElementById('cuisines-container').classList.add('active');
            document.getElementById('select-cuisines').classList.add('active');
        }
    });

    // 显示搜索结果信息
    const searchResultsInfo = document.getElementById('search-results-info');
    if (!searchResultsInfo) {
        const infoDiv = document.createElement('div');
        infoDiv.id = 'search-results-info';
        infoDiv.className = 'search-results-info';
        document.querySelector('#edit-modal .modal-content').insertBefore(infoDiv, document.querySelector('#edit-modal .edit-section'));
    }
    
    const resultsInfo = document.getElementById('search-results-info');
    if (hasResults) {
        resultsInfo.textContent = `搜索结果: "${searchTerm}"`;
        resultsInfo.classList.remove('hidden');
    } else {
        resultsInfo.textContent = `未找到 "${searchTerm}" 相关结果`;
        resultsInfo.classList.remove('hidden');
    }

    // 显示所有容器
    document.querySelector('#takeaway-container').classList.add('active');
    document.querySelector('#cuisines-container').classList.add('active');
    
    return hasResults;
}

// 隐藏搜索结果信息
function hideSearchResults() {
    const resultsInfo = document.getElementById('search-results-info');
    if (resultsInfo) {
        resultsInfo.classList.add('hidden');
    }
    
    // 恢复所有隐藏的食物项
    const allFoodItems = document.querySelectorAll('.food-item');
    allFoodItems.forEach(item => {
        item.classList.remove('hidden');
    });
    
    // 恢复所有隐藏的菜系
    const cuisineItems = document.querySelectorAll('.cuisine-item');
    cuisineItems.forEach(item => {
        item.classList.remove('hidden');
    });
}

// 初始化食物类型选择器
function initFoodTypeSelectors() {
    const takeawayBtn = document.getElementById('select-takeaway');
    const cuisinesBtn = document.getElementById('select-cuisines');
    
    if (!takeawayBtn || !cuisinesBtn) return;
    
    takeawayBtn.addEventListener('click', function() {
        switchFoodType('takeaway');
    });
    
    cuisinesBtn.addEventListener('click', function() {
        switchFoodType('cuisine');
    });
}

// 切换食物类型
function switchFoodType(type) {
    const takeawayBtn = document.getElementById('select-takeaway');
    const cuisineBtn = document.getElementById('select-cuisines');
    const takeawayContainer = document.getElementById('takeaway-container');
    const cuisineContainer = document.getElementById('cuisines-container');
    
    if (!takeawayBtn || !cuisineBtn || !takeawayContainer || !cuisineContainer) return;
    
    if (type === 'takeaway') {
        takeawayBtn.classList.add('active');
        cuisineBtn.classList.remove('active');
        takeawayContainer.classList.add('active');
        cuisineContainer.classList.remove('active');
    } else {
        takeawayBtn.classList.remove('active');
        cuisineBtn.classList.add('active');
        takeawayContainer.classList.remove('active');
        cuisineContainer.classList.add('active');
    }
    
    // 清除搜索框
    const searchInput = document.getElementById('food-search');
    if (searchInput) searchInput.value = '';
    hideSearchResults();
}

// 获取当前选择的菜系
function getCurrentCuisine() {
    const cuisineSelect = document.getElementById('cuisine-select');
    return cuisineSelect ? cuisineSelect.value : '';
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', init);