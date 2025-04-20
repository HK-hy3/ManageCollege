prompt --application/shared_components/user_interface/lovs/departments_dept_name
begin
--   Manifest
--     DEPARTMENTS.DEPT_NAME
--   Manifest End
wwv_flow_imp.component_begin (
 p_version_yyyy_mm_dd=>'2024.11.30'
,p_release=>'24.2.2'
,p_default_workspace_id=>28118185333235957468
,p_default_application_id=>274321
,p_default_id_offset=>0
,p_default_owner=>'WKSP_HY3'
);
wwv_flow_imp_shared.create_list_of_values(
 p_id=>wwv_flow_imp.id(28128918661947316187)
,p_lov_name=>'DEPARTMENTS.DEPT_NAME'
,p_source_type=>'TABLE'
,p_location=>'LOCAL'
,p_query_table=>'DEPARTMENTS'
,p_return_column_name=>'DEPT_ID'
,p_display_column_name=>'DEPT_NAME'
,p_default_sort_column_name=>'DEPT_NAME'
,p_default_sort_direction=>'ASC'
,p_version_scn=>15617325956672
,p_created_on=>wwv_flow_imp.dz('20250410204415Z')
,p_updated_on=>wwv_flow_imp.dz('20250410204415Z')
,p_created_by=>'HIYAGUPTA385@GMAIL.COM'
,p_updated_by=>'HIYAGUPTA385@GMAIL.COM'
);
wwv_flow_imp.component_end;
end;
/
