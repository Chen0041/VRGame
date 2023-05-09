module.exports = {
    title: 'XR',
    description: 'XR编辑器相关组件和功能',
    xrui: 'XRUI',
    node: {
        convert_main_camera_to_xr_hmd: '转为 XR HMD',
        convert_2dui_to_3dui: '2DUI 转为 XRUI',
        xr_agent: 'XR Agent',
        xr_hmd: 'XR HMD',
        ray_interactor: 'Ray Interactor',
        direct_interactor: 'Direct Interactor',
        locomotion_checker: 'Locomotion Checker',
        teleportable: 'Teleportable',
        simple_interactable: 'Simple Interactable',
        grab_interactable: 'Grab Interactable',
        xr_simulator: 'XR Simulator',
        xr_transition: 'XR Transition',
        xr_videoplayer: 'XR Video Player',
        gaze_pointer_interactor: 'Gaze Pointer Interactor',

        convert_main_camera_to_ar_camera: '转为 AR Camera',
        ar_camera: 'AR Camera',
        plane_tracking: 'Plane Tracking',
        world_meshing: 'Meshing',
        image_tracking: 'Image Tracking',
        face_tracking: 'Face Tracking',
        screen_touch_interactor: 'Screen Touch Interactor',
        
        button: 'Button',
        editBox: 'EditBox',
        layout: 'Layout',
        pageView: 'PageView',
        progressBar: 'ProgressBar',
        richText: 'RichText',
        scrollView: 'ScrollView',
        slider: 'Slider',
        toggle: 'Toggle',
        toggleGroup: 'ToggleGroup',
        videoPlayer: 'VideoPlayer',
        webView: 'WebView',
        sprite: 'Sprite',
        label: 'Label',
    },
    ar: {
        add_factor: 'Add Factor',
        add_action: 'Add Action',
        reset_prop: '重置',
        remove_prop: '删除',
        add_landmark: 'Add Landmark',
        add_blendShape: 'Add Blend Shape',

        factors: {
            plane_direction: 'Plane Direction',
            plane_size: 'Plane Size',
            plane_semantic: 'Plane Semantic',
            image_source: 'Image Source',
            face: 'Face Tracking Content',
        },
        actions: {
            display_children: 'Display Children',
            surface_overlay: 'Surface Overlay',
            track_event: 'Track Event',
            alignment: 'Alignment',
            adaptive_scale: 'Adaptive Scale',
            face_landmark: 'Face LandMark',
            face_blend_shapes: 'Face BlendShapes',
            face_expression_events: 'Face Expression Events',
        },
    },
    hmd_ctrl: {
        perEyeCamera: '是否开启单独的左右眼节点',
        syncWithMainCamera: '左右眼节点设置是否同步主相机',
        IPDOffset: '左右眼瞳距设置',
        offsetValue: '瞳距值',
    },
    pose_tracker: {
        trackingSource: '指定需要追踪的物理设备',
        trackingType: '设备追踪方式，生效的追踪变量',
    },
    target_eye: {
        targetEye: '渲染目标相机',
    },
    tracking_origin: {
        offsetObject: '指定需要偏移的节点',
        trackingOriginMode: '追踪偏移方式',
        yOffsetValue: '节点Y轴方向的偏移量',
    },
    xr_controller: {
        inputDevice: '物理输入设备的绑定',
        selectActionLeft: '选择状态的输入按键绑定(左)',
        activateActionLeft: '激活状态的输入按键绑定(左)',
        UIPressActionLeft: 'UI触发的按键绑定(左)',
        selectActionRight: '选择状态的输入按键绑定(右)',
        activateActionRight: '选择状态的输入按键绑定(右)',
        UIPressActionRight: '选择状态的输入按键绑定(右)',
        axisToPressThreshold: '行为触发的最小阈值',
        model: '绑定Controller的可视化模型',
    },
    xr_interactive_simulator: {
        xrAgent: '绑定XR Agent,默认绑定遍历当前场景得到的第一个XR Agent',
        deviceIp: '输入XR设备IP地址',
        previewType: '选择预览模式',
        connectType: '选择连接模式',
    },
    interactable_events: {
        hoverEnterEvents: '悬停开始事件',
        hoverStayEvents: '悬停持续事件',
        hoverExitEvents: '悬停结束事件',
        selectEnterEvents: '选择开始事件',
        selectStayEvents: '选择持续事件',
        selectExitEvents: '选择结束事件',
        activeEnterEvents: '激活开始事件',
        activeStayEvents: '激活持续事件',
        activeExitEvents: '激活结束事件',
    },
    interactor_events: {
        audioEvents: '音频触发事件',
        hapticEvents: '触觉触发事件',
        interactorEvents: '交互事件',
        audio_events: {
            onSelectEntered: '是否开启选择开始事件的触发音频',
            onSelectEnteredAudioClip: '选择开始事件的触发音频',
            onSelectStay: '是否开启选择持续事件的触发音频',
            onSelectStayAudioClip: '选择持续事件的触发音频',
            onSelectExited: '是否开启选择结束事件的触发音频',
            onSelectExitedAudioClip: '选择结束事件的触发音频',
            onHoverEntered: '是否开启悬停开始事件的触发音频',
            onHoverEnteredAudioClip: '悬停开始事件的触发音频',
            onHoverStay: '是否开启悬停持续事件的触发音频',
            onHoverStayAudioClip: '悬停持续事件的触发音频',
            onHoverExited: '是否开启悬停结束事件的触发音频',
            onHoverExitedAudioClip: '悬停结束事件的触发音频',
            onHoverCanceled: '是否开启悬停取消事件的触发音频',
            onHoverCanceledAudioClip: '悬停取消事件的触发音频',
        },
        haptic_events: {
            onSelectEntered: '是否开启选择开始事件的触发振动',
            onSelectEnteredHaptic: '选择开始事件触发振动的阈值',
            onSelectEnteredDuration: '选择开始事件触发振动的持续时间',
            onSelectEnteredDeviceType: '选择开始事件触发振动的设备类型',
            onSelectStay: '是否开启选择持续事件的触发振动',
            onSelectStayHaptic: '选择持续事件振动触发的阈值',
            onSelectStayDuration: '选择持续事件振动触发的持续时间',
            onSelectStayDeviceType: '选择持续事件振动触发的设备类型',
            onSelectExited: '是否开启选择结束振动事件的触发振动',
            onSelectExitedHaptic: '选择结束振动事件触发的阈值',
            onSelectExitedDuration: '选择结束振动事件触发的持续时间',
            onSelectExitedDeviceType: '选择结束振动事件触发的设备类型',
            onHoverEntered: '是否开启悬停开始事件的触发振动',
            onHoverEnteredHaptic: '悬停开始事件振动触发的阈值',
            onHoverEnteredDuration: '悬停开始事件振动触发的持续时间',
            onHoverEnteredDeviceType: '悬停开始事件振动触发的设备类型',
            onHoverStay: '是否开启悬停持续事件的触发振动',
            onHoverStayHaptic: '悬停持续事件振动触发的阈值',
            onHoverStayDuration: '悬停持续事件振动触发的持续时间',
            onHoverStayDeviceType: '悬停持续事件振动触发的设备类型',
            onHoverExited: '是否开启悬停结束事件的触发振动',
            onHoverExitedHaptic: '悬停结束事件振动触发的阈值',
            onHoverExitedDuration: '悬停结束事件振动触发的持续时间',
            onHoverExitedDeviceType: '悬停结束事件振动触发的设备类型',
        },
        sub_interactor_events: {
            hoverEnterEvents: '悬停开始事件',
            hoverStayEvents: '悬停持续事件',
            hoverExitEvents: '悬停结束事件',
            selectEnterEvents: '选择开始事件',
            selectStayEvents: '选择持续事件',
            selectExitEvents: '选择结束事件',
        },
    },
    xr_interactor: {
        interactionLayerMask: '可交互图层',
        attachTransform: '代替抓取的物体最终落到的位置，如果为空就用当前Interactor的位置',
        selectActionTrigger: '选择行为的触发机制',
    },
    ray_interactor: {
        forceGrab: '开启时被抓对象吸附到AttachTransform、关闭后抓取挂载在交互点的位置',
        rayOriginTransform: '发出Ray的起始位置，为空就默认是当前Interactor的位置',
        maxRayDistance: '射线最远投射距离',
        reticle: '射线光标',
        lineType: '射线投射类型',
        referenceNode: '用曲线的参考系来定义地平面和向上向量。如果在启动时没有设置， <br>它将尝试找到XR Agent，如果没有引用，它将默认使用全局的上向量和原点。',
        velocity: '初始速度。增加这个值将使曲线延伸的更远。',
        acceleration: '重力加速度。',
        additionalGroundHeight: '在地平面以下的额外高度，射线超过地平线会继续向下投射。 <br>增加这个值将使终点的位置高度下降。',
        additionalFlightTime: '在落地后的额外飞行时间，射线超过地平线会继续向下投射。 <br>增加这个值将使投射的飞行时间延长。',
        endPointDistance: '增加这个值的距离会使曲线的末端离起始点更远。',
        endPointHeight: '降低这个值将使曲线的末端相对于起点下降得更低。',
        controlPointDistance: '增加这个值将使曲线的峰值离起点更远。',
        controlPointHeight: '增加这个值将使曲线的峰值相对于起点更高。',
        sampleFrequency: '用于近似曲线路径的采样点的数目。数目越多近似效果越好，但性能越低。',
        rayCastMask: '用于限制射线检测的目标。',
    },
    gaze_interactor: {
        gazeDefaultDistance: '凝视点默认距离',
        gazeTimerDuration: '凝视点停留时间（单位：秒）',
        gazeReticleOuterRing: '凝视点外环精灵',
    },
    xr_interactable: {
        interactionLayerMask: '用于指定可交互层级',
        rayReticle: '射线触碰到交互物时，接触点显示的提示物',
    },
    grab_interactable: {
        attachTransform: '用此AttachTransform的位置作为此物被抓取的位置， <br>如果为空就用实际对象的位置(可能是被抓取物体的某一个位置点)',
        attachEaseInTime: '被抓取物体迁移过程消耗的时间',
        grabTrigger: '触发抓取的事件',
        hideController: '是否隐藏XR Controller对象模型,开启后隐藏XR Controller对象模型',
        throwOnDetach: '开启后，物体具有模拟抛出行为的物理属性',
        throwSimulationMode: '抛出时物体速度的计算方式',
        throwSmoothingDuration: '用于计算平均投掷速度的时间段',
        throwSmoothingCurve: '用于加权投掷速度平滑的曲线(右侧最近的帧)',
        throwVelocityScale: '在投掷时从交互器继承的速度的倍率',
        throwAngularVelocityScale: '在投掷时从交互器继承的角速度的倍率',
        noPosition: '屏蔽交互物的位移信号',
        noRotation: '屏蔽交互物的旋转信号',
    },
    teleportable: {
        teleportableType: '传送地的传送类型，有传送点和传送区域两种形式',
        teleportAnchorNode: '当传送类型为传送点时开启此项，定义最终传送的固定位置',
        teleportTrigger: '触发传送的事件',
        teleporter: '能够传送至此的传送对象',
    },
    locomotion_base: {
        checker: '选择参与此运动行为检查的LocomotionChecker，如果用户没有指定，则默认绑定遍历当前Object组得到的第一个Locomotion Checker',
        inputDevice: '绑定需要读取信号的输入设备',
        inputControl: '绑定输入控件',
    },
    continuous_mover: {
        moveSpeed: '移动的速度',
        forwardSource: '指定为正向方向的对象',
    },
    continuous_turner: {
        turnSpeed: '转向的速度',
    },
    sharp_turner: {
        turnAngle: '每次固定的转向角度',
        enableTurnAround: '开启后允许按下摇杆时XR Agent旋转180度',
        activationTimeout: '执行连续的转弯时需要等待的时间',
    },
    locomotion_checker: {
        xrAgent: '绑定XR Agent,默认绑定遍历当前场景得到的第一个XR Agent',
    },
    teleporter: {
        checker: '选择特定Locomotion Checker,如果用户没有指定，则默认绑定遍历当前Object组得到的第一个Locomotion Checker',
    },
    camera_following: {
        camera: '选择UI需要跟随的摄像头',
    },
    raycast_checker: {
        ignoreReversedUI: '开启后不可以和反向的UI控件交互',
    },
    xr_key: {
        key: '虚拟键盘上按键的键值',
    },
    xr_keyboard_input_field: {
        suspendTransform: 'XR键盘悬浮位置',
        xRKeyboard: '选择想要引用的虚拟键盘对象(必须挂载cc.XRKeyboard)',
    },
    xr_keyboard: {
        disableUIInteractionWhenTyping: '是否禁用用户在输入时与其他UI元素的交互。<br>使用这个选项来减少键盘被意外关闭的机会。',
        onCommitText: '提交输入文字事件的回调',
        onShowKeyboard: '显示XR键盘事件的回调',
        onHideKeyboard: '隐藏XR键盘事件的回调',
    },
    xr_switch: {
        switch_latin: '字母对应的键值',
        switch_symbol: '符号对应的键值',
        switch_math_symbol: '数字符号对应的键值',
    },

    action: {
        display: {
            displayChildrenNode: '展示Tracking节点下的子节点对象',
            stopTracking: '满足当前节点的条件设定时，关闭此节点的AR追踪',
            resetWhenLoss: '追踪丢失时，子节点行为是否重置',
        }, 
        alignment: {
            towards: '子物体摆放朝向。如果设置为Local_Up，则直接使用子物体的姿态。 <br>如果设置为World_Up，子物体Y轴将始终与世界坐标上方向对齐。',
            faceToCamera: '勾选后，子物体Z轴朝向AR Camera的方向',
            matchTrackingUpdate: '当此节点匹配的真实世界数据更新时，布局和对齐效果也跟随刷新',
        },
        adaptive_scale: {
            maxScale: '比例调整的最大上限',
            matchTrackingUpdate: 'Scale的行为是否跟随追踪而不断刷新',
        },
        surface_overlay: {
            surfaceOffset: '设置覆盖在平面上的表面位置的偏移值',
            replaceVisualizer: '创建后关闭并取代追踪可视化的效果',
        },
        trackEvent: {
            onTrackSuccess: '追踪成功时调用的事件',
            onTrackRefresh: '追踪信息刷新时调用的事件',
            onTrackLoss: '追踪丢失时调用的事件',
            onTrackTimeout: '追踪超时时调用的事件',
            timeout: {
                time: '设置保持追踪检查的时间，此时间范围内没有成功匹配追踪数据会触发追踪失败的事件。',
                event: '追踪失败的事件',
            },
        },
    },
    factor: {
        plane_direction: {
            directionType: '要求平面具有指定的方向(水平，垂直或其他)。',
        },
        plane_semantic: {
            semanticType: '',
        },
        plane_size: {
            useMinSize: '如果选中，限制平面的最小尺寸范围。',
            minSize: '设置平面范围的最小尺寸。',
            useMaxSize: '如果选中，限制平面的最大尺寸范围。',
            maxSize: '设置平面范围的最大尺寸。',
        },
        image_source: {
            imageSource: '将在物理环境中检测和跟踪的图像列表。',
            image_set_item: {
                image: '图像检测依赖的指定图像。',
                enablePhysicalSize: '如果选中，检测到的图像可以与指定的物理大小匹配。',
                imagePhysicalSize: '标定图像的物理尺寸限制(单位：米)',
            },
        },
    },
    feature: {
        enable: '如果选中，ar功能将在运行时启用。',
        tracking_List: '罗列当前编辑器中和Plane Tracking相关的能力节点',
        unsupportedEvent: '不支持该特性时，发送事件',
        plane: {
            direction_Type: '收集当前编辑器中所有平面朝向',
            maxTrackingNumber: '同一时刻镜头范围内对现实世界中平面追踪的最大数量',
            trackingVisualizer: '设置对已识别到平面的可视化效果',
            trackingQualityCondition: '显示平面可视化时的追踪质量的最低条件，当追踪质量小于此值时取消可视化。',
            usePlaneShape: '勾选后，平面将匹配扫描到的平面的几何形状；否则将生成矩形平面。',
        },
        image: {
            maxTrackingNumber: '同一时刻镜头范围内对现实世界中图片追踪的最大数量',
        },
        world_mesh: {
            normals: '开启法线',
        },
        face: {
            trackingMode: '面部追踪的方式',
            faceTrackingNode: '罗列当前编辑器中和Plane Tracking相关的能力节点',
            faceTrackingType: '三种模式Position、Rotation、Position And Rotation',
            maxTrackingNumber: '可追踪的面部最大值',
            faceTrackingOrderList: 'Face Tracking对象数组',
        },
    },
    tracking: {
        trackingType: '追踪类型',
        
        planeDirection: '表示平面必须匹配给定的朝向。',
        planeSize: '表示平面必须匹配给定的尺寸。',
        planeSemantic: '表示平面必须匹配给定的语义。',
        imageSource: '图像追踪所依赖的图像资源',

        surfaceOverlay: '平面满足条件后用指定的预置体覆盖原来的平面可视化效果。',
        display: '如果父对象的真实世界实体匹配成功，则激活子对象;否则禁用子对象。',
        trackEvent: '在跟踪匹配期间调用的事件集。',
        alignment: '将该节点的位置设置与真实世界实体的位置对齐。',
        adaptiveScale: '根据匹配AR对象的边界来缩放子物体的行为',

        meshVisualizer: '网格实例化时展现的可视化效果。',

        faceModelPrefab: '',
        faceTrackingContent: '',
        faceLandMark: '',
        faceBlendShapes: '',
        faceExpressionEvents: '',

        cameraMgr: {
            autoFocus: '摄像头自动聚焦',
            lightEstimate: '如果选中，AR设备将访问最近接收到的物理环境的光照估计信息，并应用于场景的环境光。',
        },
        manager: {
            configuration: '设备AR特性的全局属性配置',
        },
        session: {
            autoStartARSession: '应用启动时自动开启AR Session',
        },
    },

    screen_touch_gesture: {
        gesture: '允许用户操作虚拟物体的可选手势类型。',
        selectAction: {
            doubleTapGap: '用于识别双击手势的时间阈值。',
            holdTouchDuration: '用于识别长按手势的时间阈值。',
        },
        selectRotateAction: {
            dragDegree: '拖拽手势在屏幕的拖拽量使得对象进行旋转的速率。',
            twistDegree: '旋转手势在屏幕的旋转量使得对象进行旋转的速率。',
        },
        selectScaleAction: {
            sensitivity: '放缩手势在屏幕的放缩量使得对象进行放缩的速率。',
        },
        placeAction: {
            calculationMode: '当将物体放置在AR表面时，用于计算命中点位置的方法。',
            placement_Prefab: '当用户触碰到表面时放置的预制体。',
        },
    },
    screen_touch_interactor: {
        selectAction: '触屏交互器的选择行为的配置。',
        placeAction: '触屏交互器的放置行为的配置。',
        selectScaleAction: '触屏交互器的放缩行为的配置。',
        selectMoveAction: '触屏交互器的移动行为的配置。',
        selectRotateAction: '触屏交互器的旋转行为的配置。',
    },
    placeable: {
        preview_Placement_Prefab: '在放置动作发生之前要放置的预放置对象。',
        placementOffset: '偏移由交互器放置的预制件的位置。',
        placementEvents: '放置行为的回调，它将在特定事件发生时被触发。',
        placement_events: {
            placeEnterEvents: '当放置行为开始时触发事件。',
            placeCancelEvents: '当放置行为取消时触发事件。',
            placeFinishEvents: '当放置行为完成时触发事件。',
        },
    },
    selectable: {
        allowedActions: '选择此对象后允许进行的操作。',
        selectedVisualization: '对象被选中时将激活的可视化效果。',
        selectionEvents: '选择行为的回调，它将在特定事件发生时被触发。',
        select_events: {
            selectEnterEvents: '当进入选择状态时触发事件。',
            selectExitEvents: '当选择状态退出时触发事件。',
            selectCancelEvents: '选择状态中断时触发事件。',
        },
    },

    document: {
        agree: '同意',
        disagree: '不同意',
    },
    builder: {
        asWebXR: {
            label: 'WebXR',
            description: 'Web工程兼容XR模式，如果浏览器不支持WebXR，请增加提醒以便在运行时告知用户。',
        },
        enableAR: {
            label: 'Enable AR',
            description: '开启后，应用程序将启用设备AR能力。',
        },
        rendering_scale: '调整渲染分辨率比例',
        msaa: '调整多重采样抗锯齿参与计算的像素像素个数',
        remote_preview: '是否开启无线投屏预览功能',
    },    
    videoplayer: {
        resourceType: '视频来源：REMOTE 表示远程视频 URL，LOCAL 表示本地视频地址。',
        remoteURL: '远程视频的 URL',
        clip: '本地视频剪辑',
        playOnAwake: '视频加载后是否自动开始播放？',
        volume: '视频的音量（0.0 ~ 1.0）',
        playbackRate: '视频播放时的速率（0.0 ~ 10.0）',
        mute: '是否静音视频。静音时设置音量为 0，取消静音是恢复原来的音量。',
        loop: '视频是否应在结束时再次播放',
        keepAspectRatio: '是否保持视频原来的宽高比',
        videoPlayerEvent: '视频播放回调函数，该回调函数会在特定情况被触发，比如播放中，暂时，停止和完成播放。',
        videoShape: '视频样式',
        videoContent: '关联带有MeshRenderer组件的VideoContent作为视频材质渲染对象',
        captionSourceType: '字幕来源：REMOTE 表示远程字幕 URL，LOCAL 表示本地字幕地址。',
        captionRemoteURL: '远程字幕文件的 URL',
        captionFile: '本地字幕文件',
        videoPlayer: '指定依赖的播放器UI',
    },
    XRVideoController: {
        videoPlayer: '绑定需要控制的视频渲染节点。',
        hmdControl: '绑定头戴显示器的控制器对象节点。',
        leftHandController: '绑定左手柄的控制器对象节点。',
        rightHandController: '绑定右手柄的控制器对象节点。',
        playPause: '播放/暂停UI',
        progressBar: '进度条UI',
        fastForward: '快进按钮UI',
        rewind: '快退按钮UI',
        videoShapeUI: '视频样式UI',
        playerBackRateBar: '倍速UI',
        volumeUI: '音量调节UI',
    },
};